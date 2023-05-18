import { ethers } from "ethers";
import { ADDRESSES } from "global/config/addresses";
import { CantoMainnet, CantoTestnet } from "global/config/networks";

export function getRouterAddress(chainId: number | undefined) {
  return CantoTestnet.chainId == chainId
    ? CantoTestnet.addresses.PriceFeed
    : CantoMainnet.addresses.PriceFeed;
}

export function getComptrollerAddress(chainId: number | undefined) {
  return CantoTestnet.chainId == chainId
    ? CantoTestnet.addresses.Comptroller
    : CantoMainnet.addresses.Comptroller;
}
export function getGravityBridgeAddress(chainId: number | undefined) {
  return CantoTestnet.chainId == chainId
    ? ADDRESSES.gravityBridgeTest.GravityBridge
    : ADDRESSES.ETHMainnet.GravityBridge;
}
export function getRPCURL(chainId: number | undefined) {
  return CantoTestnet.chainId == chainId
    ? CantoTestnet.rpcUrl
    : CantoMainnet.rpcUrl;
}
export function getCurrentProvider(chainId: number) {
  return new ethers.providers.JsonRpcProvider(getRPCURL(chainId));
}
export function getCosmosAPIEndpoint(chainId: number | undefined) {
  return CantoTestnet.chainId == chainId
    ? CantoTestnet.cosmosAPIEndpoint
    : CantoMainnet.cosmosAPIEndpoint;
}
