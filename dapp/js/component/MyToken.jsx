import React from 'react';
import { MyToken } from '../../../contract/MyToken.sol';

export default function Web3() {
  return (
    <div className="MyToken">
      <h2>MyToken</h2>
      <p>Instantiated (deployed) MyToken is available as <code>MyToken</code>.</p>
      <dl>
        <dt>Token name</dt>
        <dd>{MyToken.name()}</dd>
        <dt>Token symbol</dt>
        <dd>{MyToken.symbol()}</dd>
        <dt>Total supply of token</dt>
        <dd>{MyToken.totalSupply().toString()}</dd>
        <dt>Version</dt>
        <dd>{MyToken.version()}</dd>
      </dl>
    </div>
  );
}
