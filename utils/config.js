import { existsSync, writeFileSync, readFileSync } from 'fs'
import { resolve } from 'path'
import stringify from 'json-stringify-pretty-compact'

// Utils
import { getProjectRoot } from './getProjectRoot.js'

const configPath = resolve(getProjectRoot(), 'styleforgerc.json')

const defaultConfig = {
  output: {
    dir: 'src/assets/styles',
    name: 'style-forge',
  },
}

if (!existsSync(configPath)) {
  writeFileSync(configPath, stringify(defaultConfig))
}

export const config = JSON.parse(readFileSync(configPath, 'utf-8'))
