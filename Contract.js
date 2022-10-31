
import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

const address = '0x1234567890123456789012345678901234567890';

const chain = EvmChain.ETHEREUM;

await Moralis.start({
    apiKey: '<YOUR_API_KEY>',
    // ...and any other configuration
});

const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
});
console.log(response);
