import { dirname, resolve } from 'path'
import { existsSync } from 'fs'
import { fileURLToPath } from 'url'

const maxDepth = 10
const __filename = fileURLToPath(import.meta.url)
const cliDir = dirname(__filename)

export function getProjectRoot(start = process.cwd()) {
  let dir = start
  let depth = 0

  while (dir !== dirname(dir) && depth < maxDepth) {
    const pkgPath = resolve(dir, 'package.json')

    if (existsSync(pkgPath)) {
      const isInsideNodeModules = cliDir.includes('/node_modules/') || cliDir.includes('\\node_modules\\')

      if (isInsideNodeModules && cliDir.startsWith(dir)) {
        return null
      }

      return dir
    }

    dir = dirname(dir)
    depth++
  }

  return null
}
