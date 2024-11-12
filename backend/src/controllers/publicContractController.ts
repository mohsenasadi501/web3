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
