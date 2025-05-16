import { readFileSync, mkdirSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'

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

const projectRoot = getProjectRoot()

const OUTPUT = resolve(projectRoot, `${config.output.dir}/${config.output.name}.css`)

const pkg = JSON.parse(readFileSync(resolve(projectRoot, 'package.json'), 'utf8'))
const deps = Object.keys(pkg.dependencies || {})

const title = pkg.name + ' ' + pkg.version
const license = pkg.license + ' License'
const link = pkg.repository.url.replace('git+', '').replace('.git', '')
const HEADER = '/*! ' + [title, license, link].join(' | ') + ' */'

const ordered = MODULES.filter(x => x !== 'style-forge.colors' && deps.includes(x))

if (ordered.length === 0) {
  console.log(`❗ No compatible modules found for building ${config.output.name}.css`)
  process.exit(0)
}

const imports = ordered.map(name => `@import "${name}";`).join('\n')

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
