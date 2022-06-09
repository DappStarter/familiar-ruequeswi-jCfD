require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind exchange grace merry flock train'; 
let testAccounts = [
"0x36e49866958f062eec416bb32d0135c092601329702f1776b205d4001d09aed0",
"0x0836fca21ed16d3fc628fd9c3fcb5e5d99b6ceabb599b5827de17f136427ee6f",
"0x9a6aed1865ab723b5c0c82ce4b4a3b602ec67bc623cd96655622b527f29baa5d",
"0xc41435bf64e105577ffc7a7e37e195f81507277a74b5017051b9485ba5688373",
"0x309a7c9a34c0c61f0ea281c6edad16b465b253c3efff098c84a7af24f78db0ac",
"0x6c43f2b6613edb92d3fe1232980f883e287ce8ba69a37226ee0fdb0f4172c0d9",
"0xc0a77cb7a177d3b15e5ec6a3c25974e0aa8a76a9e5b669235f79e35c1831179d",
"0xa6626b4055af9748b957e0e4587251cc62f76377e95321d1a518128a84197623",
"0xa51c6be6227222ccc886b01d3bb92471522f0c197db2e422042e43e8fd13f351",
"0xdafef5f93825b5766ee99f0b1a4c1eae5ff61f145d63527cc0c2e40ec8f6cf39"
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

