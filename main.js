#!/usr/bin/env node

import { readFileSync, existsSync, unlinkSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'

// packages
import chalk from 'chalk'
import inquirer from 'inquirer'

// utils
import { config } from './utils/config.js'
import { MODULES } from './utils/modules.js'
import { getProjectRoot } from './utils/getProjectRoot.js'
import { installPackages, uninstallPackages } from './utils/pkg.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function main() {
  console.clear()

  console.log(`
    ${chalk.hex('#00ffff').bold('  ⚡ STYLE-FORGE ⚡  ')}
  `)

  const projectRoot = getProjectRoot()

  if (!projectRoot) {
    console.error('\n❌ Project root not found. Make sure you are inside a valid project with package.json\n')
    process.exit(1)
  }

  const pkg = JSON.parse(readFileSync(resolve(projectRoot, 'package.json'), 'utf8'))
  const deps = pkg.dependencies || {}

  const choices = MODULES.map(name => {
    const version = deps[name] ? ` (${deps[name]})` : ''
    return {
      name: name + version,
      value: name,
      checked: !!deps[name],
    }
  })

  const { selected } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selected',
      message: 'Select modules to install:',
      choices,
    },
  ])

  const toInstall = selected.filter(m => !deps[m])
  const toUninstall = MODULES.filter(m => deps[m] && !selected.includes(m))

  if (toInstall.length > 0) await installPackages(toInstall)
  if (toUninstall.length > 0) await uninstallPackages(toUninstall)

  if (selected.length > 0) {
    const buildPath = resolve(__dirname, './utils/builder.js')
    const child = spawn('node', [buildPath], { stdio: 'inherit' })

    child.on('exit', code => {
      if (code !== 0) {
        console.error('\n❌ Failed to build style-forge.css.\n')
      }
    })
  } else {
    const outputPath = resolve(projectRoot, `${config.output.dir}/${config.output.name}.css`)

    if (existsSync(outputPath)) {
      unlinkSync(outputPath)
      console.log(`\n🧹 Removed ${config.output.name}.css (no modules selected).\n`)
    } else {
      console.log('\n❗ No modules selected, nothing to build.\n')
    }
  }
}

main().catch(err => {
  if (err?.isTtyError || err?.message?.includes('SIGINT') || err.name === 'ExitPromptError') {
    console.log('\n👋 Bye!\n')
    process.exit(0)
  }

  console.error('\n❌ Unhandled error:', err)
  process.exit(1)
})
