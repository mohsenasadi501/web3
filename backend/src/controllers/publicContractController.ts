import { Request, response, Response } from 'express'
import Web3 from "web3"

const usdtAbi = require("../../assets/USDT.json");

// this controller check the name, symbol and totalSupply of a address
export const USDTController = async (req: Request, res: Response) => {

    // URL of etherum mainnet 
    const provider = new Web3.providers.HttpProvider(process.env.ETHERUM_BLOCKCHAIN_URL ?? "");
    const web3 = new Web3(provider);

    // USDT smart contract address
    let smartContractAddress = req.body.address;

    const contract = new web3.eth.Contract(usdtAbi, smartContractAddress);

    const name = await contract.methods.name().call();
    const symbol = await contract.methods.symbol().call();
    const totalSupply = await contract.methods.totalSupply().call();

    console.log(`Token Name: ${name}`);
    console.log(`Token Symbol: ${symbol}`);
    console.log(`Total Supply: ${totalSupply}`);

    res.send({ name, symbol })
}

export const BalanceController = async (req: Request, res: Response) => {
    // URL of etherum mainnet 
    const provider = new Web3.providers.HttpProvider(process.env.ETHERUM_BLOCKCHAIN_URL ?? "");
    const web3 = new Web3(provider);
    let walletAddress = req.query.address;
    var balance: string = '';

    await web3.eth.getBalance(walletAddress?.toString() ?? "")
        .then(wei => {
            balance = web3.utils.fromWei(wei, 'ether');
            console.log(wei)
        });

    console.log(balance)
    res.send(balance);
}

export const CreateWalletController = async (req: Request, res: Response) => {

    const web3 = new Web3();

    // Create a new wallet (address + private key)
    const wallet = web3.eth.accounts.create();

    console.log("New Wallet Created:");
    console.log("Address:", wallet.address);
    console.log("Private Key:", wallet.privateKey);

    res.send({ address: wallet.address, privateKey: wallet.privateKey });
}

export const TransferWalletController = async (req: Request, res: Response) => {

    const provider = new Web3.providers.HttpProvider(process.env.SEPOLIA_BLOCKCHAIN_URL ?? "");
    const web3 = new Web3(provider);

    let fromAddress = req.body.fromAddress as string || '';
    let fromPrivateKey = req.body.fromPrivateKey as string || '';
    let toAddress = req.body.toAddress as string || '';
    let amount = req.body.amount as string || '';

    const nonce = await web3.eth.getTransactionCount(fromAddress, 'latest');

    type TxType = {
        from: string,
        to: string,
        value: string,
        nonce: bigint,
        gas?: bigint,
        gasPrice?: bigint
    };

    const tx: TxType = {
        from: fromAddress,
        to: toAddress,
        value: amount,
        nonce: nonce,
    };
    const gasPrice = await web3.eth.getGasPrice();
    const gasEstimate = await web3.eth.estimateGas(tx);

    tx.gas = gasEstimate;
    tx.gasPrice = gasPrice;

    console.log(tx);

    // Sign the transaction with the private key
    const signedTx = await web3.eth.accounts.signTransaction(tx, fromPrivateKey);

    // Send the signed transaction
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log('Transaction successful with hash:', receipt.transactionHash);

    res.send(receipt.transactionHash);
}
