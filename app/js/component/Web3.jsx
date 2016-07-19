import React from 'react';
import { web3 } from '../../../contract/MyToken.sol';

export default function Web3() {
  return (
    <div className="Web3">
      <h2>Web3</h2>
      <p>Initialized <code>Web3</code> object for easy interfacing of Ethereum JavaScript API.</p>
      <dl>
        <dt>Connected Ethereum node (Web3 provider)</dt>
        <dd>{web3.currentProvider.host}</dd>
        <dt>Latest block</dt>
        <dd>{web3.eth.blockNumber}</dd>
        <dt>Accounts</dt>
        <dd>
          {web3.eth.accounts.map(
            (account) => <div key={account}>{account}</div>
          )}
        </dd>
      </dl>
    </div>
  );
}
