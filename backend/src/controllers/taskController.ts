import { Request, Response } from 'express'
import Web3 from "web3"

const contractData = require("../../../contracts/artifacts/contracts/TodoList.sol/TodoList.json");

export const createTaskController = async (req: Request, res: Response) => {

    const provider = new Web3.providers.HttpProvider(process.env.SEPOLIA_BLOCKCHAIN_URL ?? "");
    const web3 = new Web3(provider);

    const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY ?? "");
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;

    const contract = new web3.eth.Contract(contractData.abi, process.env.SMART_CONTRACT_ADDRESS);

    const { data } = req.body;

    // Create the transaction
    const tx = contract.methods.createTask(data);
    const gas = await tx.estimateGas({ from: account.address });

    const txData = {
        from: account.address,
        to: process.env.SMART_CONTRACT_ADDRESS,
        data: tx.encodeABI(),
        gas,
    };

    // Send the transaction
    const receipt = await web3.eth.sendTransaction(txData);

    console.log("Transaction successful with hash:", receipt.transactionHash);
    res.send("Add the Task successfully")
}

export const readAllTaskController = async (req: Request, res: Response) => {

    const provider = new Web3.providers.HttpProvider(process.env.SEPOLIA_BLOCKCHAIN_URL ?? "");
    const web3 = new Web3(provider);

    const contractABI = contractData.abi;
    const contractAddress = process.env.SMART_CONTRACT_ADDRESS;

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const value = await contract.methods.getTasks().call();

    res.send({ value });
}
