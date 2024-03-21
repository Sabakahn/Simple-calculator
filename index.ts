#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n\tWellcome To \'npx-Saba\' - CLI Calculator\n")

const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firestNumber"},
    { message: "Enter second number", type: "number", name: "secondtNumber"},
    {
message: "Select one of the operators to perform action",
type:"list",
name:"operator",
choices:["Addition","Subtraction","Multiplication","Division"],
    },
]);
//condion 
if (answer.operator ==="Addition"){
    console.log(answer.firestNumber + answer.secondtNumber);

}else if (answer.operator ==="Subtraction"){
        console.log(answer.firestNumber - answer.secondtNumber);
    }
        else if (answer.operator ==="Multiplication"){
            console.log(answer.firestNumber * answer.secondtNumber);

    }else if (answer.operator ==="Division"){
        console.log(answer.firestNumber / answer.secondtNumber);
}else{
    console.log("Pleaze select vlid operator")
}

