# React Ethereum Dapp Template

Template for React-based Ethereum decentralized app (Dapp) 

This is basically a combination of

- [react-webpack-airbnbjs-boilerplate](https://github.com/uzyn/react-webpack-airbnbjs-boilerplate), and
- [ethereum-webpack-example-dapp](https://github.com/uzyn/ethereum-webpack-example-dapp)

## What does this include

- Webpack build script with Webpack dev server
- ES2015/ES6
- ESlint for ES2015 using Airbnb JS style guide
- React for front-end view
- Solidity for Ethereum smart contracts
- Test suite for smart contract testing


## How to run

1. Run a local Ethereum node with JSON-RPC listening at port 8545 _(default)_. [testrpc](https://github.com/ethereumjs/testrpc) would be the most straight-forward method.

  ```bash
  # Using testrpc (recommended)
  testrpc

  # If you are running Geth, 
  # make sure to run in testnet or private net and enable rpc
  geth --testnet --rpc
  ```

1. Install dependencies

  ```bash
  npm install
  ```

1. Start the dev server, code and enjoy! Browser should automatically refresh if you make any changes to the code.

  ```bash
  npm start
  ```

  Load [http://localhost:8080/](http://localhost:8080/) on your web browser.

1. For deployment, run `npm build` and upload `build/` to your server.

