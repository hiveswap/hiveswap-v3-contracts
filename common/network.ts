import type { NetworkUserConfig } from 'hardhat/types'

export const makalu: NetworkUserConfig = {
  url: 'https://testnet-rpc.maplabs.io',
  chainId: 212,
  accounts: [process.env.KEY_MAKALU!],
}

export const map: NetworkUserConfig = {
  url: 'https://rpc.maplabs.io',
  chainId: 22776,
  accounts: [process.env.KEY_MAP!],
}
