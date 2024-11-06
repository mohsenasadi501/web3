import { ethers } from "hardhat";

async function main() {

  const todoListSC = await ethers.getContractFactory("TodoList");
  const todoList = await todoListSC.deploy();

  console.log(`Todo List Deployed To ${await todoList.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
