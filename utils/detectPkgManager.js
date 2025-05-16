import { existsSync } from 'fs'
import { resolve } from 'path'

import { getProjectRoot } from './getProjectRoot.js'

export function detectPkgManager() {
  const projectRoot = getProjectRoot()

  const manager = existsSync(resolve(projectRoot, 'pnpm-lock.yaml'))
    ? 'pnpm'
    : existsSync(resolve(projectRoot, 'yarn.lock'))
    ? 'yarn'
    : 'npm'

  console.log(`\nDetected package manager: ${manager}\n`)

  return manager
}
