import Web3 from "web3"
import { AbiItem } from "web3-utils";

const contractData = require("../../../contracts/artifacts/contracts/TodoList.sol/TodoList.json");

// Set up the TaskCreated event listener
export const listenForTaskCreated = () => {
    // Initialize Web3 and the contract instance
    // Use a WebSocket provider
    const provider = new Web3.providers.WebsocketProvider(process.env.WEBSOCKET_BLOCKCHAIN_URL ?? '');
    const web3 = new Web3(provider);

    const contractAddress = process.env.SMART_CONTRACT_ADDRESS ?? '';
    const contractABI = contractData.abi as AbiItem[];
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const startListening = () => {
        (contract.events['TaskCreated'] as any)({
            fromBlock: 'latest',
        })
            .on('data', (event: any) => {
                console.log("Task Created Event:", event.returnValues);
            });
    };

    startListening();

    // Handle connection close for WebSocket
    provider.on("disconnect", (error: Error) => {
        console.error("WebSocket connection closed, reconnecting...", error);
        setTimeout(listenForTaskCreated, 5000); // Reconnect after 5 seconds
    });
};