import { MyToken, web3 } from '../../contract/MyToken.sol';

const assert = require('chai').assert;

describe('MyToken', () => {
  describe('totalSupply()', () => {
    it('should return the correct value', () => {
      assert.equal(MyToken.totalSupply().toNumber(), 250000);
    });
  });

  describe('transfer()', () => {
    it('should successfully transfer tokens', () => {
      const account1 = web3.eth.accounts[0];
      const account2 = web3.eth.accounts[1];
      MyToken.transfer(account2, 100, { from: account1, gas: 100000 });

      assert.equal(MyToken.balanceOf(account2).toNumber(), 100);
      assert.equal(MyToken.balanceOf(account1).toNumber(), 250000 - 100);
    });
  });
});
