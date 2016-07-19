import React from 'react';
import Web3 from './Web3';
import MyToken from './MyToken';


export default function App() {
  return (
    <div className="app">
      <h1>Sample Ethereum Dapp with Webpack</h1>
      <p>Example The Coin Dapp with smart contract code from <a href="https://www.ethereum.org/token" target="_blank">https://www.ethereum.org/token</a></p>

      <hr />
      <Web3 />

      <hr />
      <MyToken />

      <hr />
      <h2>tokenRecipient</h2>
      <p>
        If a <code>.sol</code> file contains more than one contracts,
        individual instantiated contracts are also available.
        See <code>console.log(tokenRecipient)</code>.
      </p>

      <hr />
      <p>You can find more information on this sample dapp at its <a href="https://github.com/uzyn/react-ethereum-dapp-template" target="_blank">GitHub repository</a> and <a href="https://twitter.com/uzyn" target="_blank">@uzyn</a>.</p>
    </div>
  );
}
