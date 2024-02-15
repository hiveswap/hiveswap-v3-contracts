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

export const merlin: NetworkUserConfig = {
  url: 'https://rpc.merlinchain.io',
  chainId: 4200,
  accounts: [process.env.KEY_MAP!],
}
