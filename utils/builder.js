import { readFileSync, mkdirSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// packages
import postcss from 'postcss'
import pImport from 'postcss-import'
import pDuplicated from 'postcss-combine-duplicated-selectors'
import pComments from 'postcss-discard-comments'
import pAutoprefixer from 'autoprefixer'
import pMinify from 'postcss-minify'

// Utils
import { MODULES } from './modules.js'
import { config } from './config.js'
import { getProjectRoot } from './getProjectRoot.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const OUTPUT = resolve(getProjectRoot(), `${config.output.dir}/${config.output.name}.css`)

const forgePkg = JSON.parse(readFileSync(resolve(__dirname, '..', 'package.json'), 'utf-8'))
const title = forgePkg.name + ' ' + forgePkg.version
const license = forgePkg.license + ' License'
const link = forgePkg.repository.url.replace('git+', '').replace('.git', '')
const HEADER = '/*! ' + [title, license, link].join(' | ') + ' */'

const userPkg = JSON.parse(readFileSync(resolve(getProjectRoot(), 'package.json'), 'utf-8'))
const deps = Object.keys(userPkg.dependencies || {})
const mds = MODULES.filter(x => x !== 'style-forge.colors' && deps.includes(x))

if (mds.length === 0) {
  console.log(`❗ No compatible modules found for building ${config.output.name}.css`)
  process.exit(0)
}

const imports = mds.map(name => `@import "${name}";`).join('\n')

const plugins = [
  pImport,
  pAutoprefixer,
  pDuplicated({ removeDuplicatedProperties: true }),
  pComments({ removeAll: true }),
  pMinify,
]

postcss(plugins)
  .process(imports, { from: undefined, to: OUTPUT })
  .then(result => {
    mkdirSync(dirname(OUTPUT), { recursive: true })
    writeFileSync(OUTPUT, [HEADER, result.css].join('\n'))
    console.log(`\n✅ ${config.output.name}.css built successfully.\n`)
  })
  .catch(err => {
    console.error('❌ Build failed:', err)
  })
