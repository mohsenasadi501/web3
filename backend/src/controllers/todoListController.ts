import { Request, Response } from 'express'
import Web3 from "web3"

const contractData = require("../../../contracts/artifacts/contracts/TodoList.sol/TodoList.json");

export const creatTaskController = async (req: Request, res: Response) => {

    const provider = new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_URL ?? "");
    const web3 = new Web3(provider);


    const contractABI = contractData.abi;
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    console.log(contractABI);

    const value = await contract.methods.creatTask("Test")
    // res.send({ value });
    res.send("Hi");
}
