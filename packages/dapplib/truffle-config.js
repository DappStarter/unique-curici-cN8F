require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan random still essay gloom end army giant'; 
let testAccounts = [
"0xe2fa56de1eff5bbb315272c1132e0f79efa851f806c550cd2a697455a6873833",
"0x8646d352481ae1528582b5c4ed9e944b5e6c2ddf2706b500e84969c789026e2e",
"0x4f355e1916ed22e5f71e1959265b811196bb103ee3eda663a5a8aabc96db65d7",
"0xf7f792976ceb5a3a76530e8e0c0f51530f80561e5f8f1b4235cac8aaa1926e8f",
"0x89d15e11a3a9d3826f067cb3a1dea0fb5feb9c287aa1da95318978dec3c67325",
"0xbfaeedd038e687a83fd31d43efc3e7280747db8af11e9e19689c09158c2187d0",
"0x89bf8eab75c7fc31d7a773016a1a77f5ed405a7d2c9fb359df7fd2dc5b57736f",
"0xbf9283026482bbe754654e25f6b699008a6fb68054f1b4ea9f1d6f7c0f1add73",
"0x3c71e551f3198324c6aa688970aa5f3e042b4de37e37016ae2f804125ac078db",
"0xa01fc0fe031324cfcf3a892a1e18b57fdef5cb43dd0d343752dc71ecdbbf2456"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

