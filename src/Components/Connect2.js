import React, { Component } from 'react';
import Web3 from 'web3';

class WanchainIntegration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      balance: '0',
      web3: null,
    };
  }

  async componentDidMount() {
    if (window.ethereum) {
      try {
        // Request MetaMask to enable Ethereum provider
        await window.ethereum.enable();

        // Initialize Web3 with MetaMask's provider
        const web3 = new Web3(window.ethereum);

        // Get the selected account from MetaMask
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        // Get the account balance
        const balance = await web3.eth.getBalance(account);

        this.setState({ account, balance, web3 });
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask is not installed or not available');
    }
  }

  render() {
    return (
      <div>
        <h1>Wanchain Integration with MetaMask</h1>
        {this.state.account && (
          <div>
            <p>Account: {this.state.account}</p>
            
            <p>Balance: {this.state.web3.utils.fromWei(this.state.balance, 'ether')} WAN</p>
          </div>
        )}
      </div>
    );
  }
}

export default WanchainIntegration;