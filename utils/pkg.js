import { execSync } from 'child_process'
import { detectPkgManager } from './detectPkgManager.js'

export async function installPackages(pkgs) {
  const manager = detectPkgManager()

  const cmd =
    manager === 'yarn'
      ? `yarn add ${pkgs.join(' ')}`
      : manager === 'pnpm'
      ? `pnpm add ${pkgs.join(' ')}`
      : `npm install ${pkgs.join(' ')}`

  console.log(`💥 Installing: ${cmd}\n`)

  execSync(cmd, { stdio: 'inherit' })
}

export async function uninstallPackages(pkgs) {
  const manager = detectPkgManager()

  const cmd =
    manager === 'yarn'
      ? `yarn remove ${pkgs.join(' ')}`
      : manager === 'pnpm'
      ? `pnpm remove ${pkgs.join(' ')}`
      : `npm uninstall ${pkgs.join(' ')}`

  execSync(cmd, { stdio: 'inherit' })
}
