const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');

// Your Matic RPC endpoint and contract address
const maticRpcEndpoint = 'https://rpc-mainnet.matic.network';
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// Your wallet mnemonic for the Matic network
const mnemonic = 'YOUR_MNEMONIC';

const web3 = new Web3(new HDWalletProvider(mnemonic, maticRpcEndpoint));

// Contract ABI (replace with your ABI)
const abi = [
    // ... ABI of your RentalContract
];

const rentalContract = new web3.eth.Contract(abi, contractAddress);

async function rentProperty(tenantAddress) {
    const accounts = await web3.eth.getAccounts();
    await rentalContract.methods.rentProperty(tenantAddress).send({ from: accounts[0] });
    console.log('Property rented to', tenantAddress);
}

async function payRent() {
    const accounts = await web3.eth.getAccounts();
    await rentalContract.methods.payRent().send({ from: accounts[1], value: web3.utils.toWei('0.1', 'ether') });
    console.log('Rent paid by tenant');
}

async function vacateProperty() {
    const accounts = await web3.eth.getAccounts();
    await rentalContract.methods.vacateProperty().send({ from: accounts[1] });
    console.log('Property vacated by tenant');
}

// Example usage
rentProperty('0x1234567890123456789012345678901234567890')
    .then(() => payRent())
    .then(() => vacateProperty())
    .catch(error => console.error('Error:', error));
