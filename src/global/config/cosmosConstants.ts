export const chain = {
  chainId: 7700,
  cosmosChainId: "canto_7700-1",
};
export const memo = "";

//convert coin constants
export const convertFee = {
  amount: "300000000000000000",
  denom: "acanto",
  gas: "3000000",
};

export const ibcFee = {
  amount: "300000000000000000",
  denom: "acanto",
  gas: "3000000",
};

export const pubKeyFee = {
  amount: "25000000000000000",
  denom: "acanto",
  gas: "250000",
};

export const votingFee = {
  amount: "100000000000000000",
  denom: "acanto",
  gas: "1000000",
};

export interface Fee {
  amount: string;
  denom: string;
  gas: string;
}

export interface Sender {
  accountAddress: string;
  sequence: number;
  accountNumber: number;
  pubkey: string;
}

export interface Chain {
  chainId: number;
  cosmosChainId: string;
}
