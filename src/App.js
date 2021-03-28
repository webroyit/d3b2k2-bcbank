import { Tabs, Tab } from 'react-bootstrap'
import dBank from './abis/dBank.json';
import React, { Component } from 'react';
import Token from './abis/Token.json';
import Web3 from 'web3';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      web3: 'undefined',
      account: '',
      token: null,
      dbank: null,
      balance: 0,
      dBankAddress: null
    }
  }

  async componentWillMount() {
    await this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    // Check if MetaMask exists
    if(typeof window.ethereum !== 'undefined'){
      // Get a copy of web3 from MetaMask
      // MetaMask store a variable that connect to blockchain in the browser
      // To connection to the blockchain
      const web3 = new Web3(window.ethereum);

      const netId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();
      
      // Load balance
      if(typeof accounts[0] !=='undefined'){
        const balance = await web3.eth.getBalance(accounts[0]);
        this.setState({account: accounts[0], balance: balance, web3: web3});
      }
      else {
        window.alert('Please login with MetaMask');
      }

      // Load contracts
      try {
        const token = new web3.eth.Contract(Token.abi, Token.networks[netId].address);
        const dbank = new web3.eth.Contract(dBank.abi, dBank.networks[netId].address);
        const dBankAddress = dBank.networks[netId].address;
        this.setState({token: token, dbank: dbank, dBankAddress: dBankAddress});
      }
      catch (e) {
        console.log('Error', e);
        window.alert('Contracts not deployed to the current network');
      }
    }
    // If MetaMask not exists, push alert
    else {
      window.alert('Please install MetaMask');
    }
  }

  render() {
    return (
      <div className='text-monospace'>
        <nav className="navbar navbar-dark fixed-top bg-success flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="/"
          >
          <b>dBank</b>
        </a>
        </nav>
        <div className="container-fluid mt-5 text-center">
        <br></br>
          <h1>{/*add welcome msg*/}</h1>
          <h2>{/*add user address*/}</h2>
          <br></br>
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                {/*add Tab deposit*/}
                {/*add Tab withdraw*/}
              </Tabs>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;