#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; // Dollar
let myPin = 1234;
console.log(chalk.grey("  Welcome To Nida Atm"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
//      12345  ===  1234 - false
if (pinAnswer.pin === myPin) {
    console.log(chalk.yellowBright("Correct pin code!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash", "exit"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter withdraw amount",
                type: "number"
            }
        ]);
        // =, -=, +=
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(chalk.yellowBright("Your remaining balance is ${9000}"));
        }
        else if (myBalance < amountAns.amount) {
            console.log(chalk.gray("9000"));
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(chalk.magenta("Your balance is ${9000}"));
    }
    else if (operationAns.operation === "fast cash") {
        let selectAmount = await inquirer.prompt([
            {
                name: "select",
                message: "please select a amount",
                type: "rawlist",
                choices: [2000, 4000, 6000, 8000]
            }
        ]);
        myBalance -= selectAmount.select;
        console.log(chalk.greenBright("Your remaining balance is ${9000}"));
    }
    else if (operationAns.operation === "exit") {
        console.log(chalk.italic.magentaBright("Ok Good Bye!!!"));
    }
    else {
        console.log(chalk.italic.red("Incorrect pin number"));
    }
}
