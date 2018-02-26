const mlog = require('mocha-logger');
const util = require('util');
require('chai').should();

const HelloErc20 = artifacts.require('HelloERC20');

contract('HelloERC20', ([owner]) => {
  beforeEach(async () => {
    this.hello_erc20 = await HelloErc20.new({ from: owner });
  });
  describe('Given that I have a Token Contract', () => {
    it('it should have the correct name', async () => {
      const name = await this.hello_erc20.name();
      name.should.be.equal("Hello ERC20 Coin");
    });
    it('it should have the correct symbol', async () => {
      const symbol = await this.hello_erc20.symbol();
      symbol.should.be.equal("HE2");
    });
  });
});
