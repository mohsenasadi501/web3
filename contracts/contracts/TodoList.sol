// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract TodoList {
    mapping(uint256 => string) public tasks;
    uint256 public taskCount;

    event TaskCreated(uint id, string content);

    constructor() {
        tasks[0] = "Task 1";
    }

    function createTask(string memory task) public {
        taskCount += 1;
        tasks[taskCount] = task;
        emit TaskCreated(taskCount, task);
    }

    function getTasks() public view returns (string[] memory) {
        string[] memory allTasks = new string[](taskCount);
        for (uint256 i = 0; i < taskCount; i++) {
            allTasks[i] = tasks[i];
        }
        return (allTasks);
    }
}
