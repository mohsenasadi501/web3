import { Request, Response } from 'express'
import Web3 from "web3"

const usdtAbi = require("../../assets/USDT.json");

// this controller check the name, symbol and totalSupply of a address
export const USDTController = async (req: Request, res: Response) => {

    // URL of etherum mainnet 
    const provider = new Web3.providers.HttpProvider("https://eth-mainnet.g.alchemy.com/v2/h3w4uLazHEFGHS711kwGaRIjAwxKchpO");
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
    // } else {
    //     console.log('Invalid Ethereum address or checksum.');
    //     res.send("Invalid Ethereum address or checksum")
    // }
}