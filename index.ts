#! /usr/bin/env node
// shabang
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: 'Enter  First Number ', type: 'number', name: 'firstNumber'},
  { message: 'Enter  Second Number', type: 'number', name: 'secondNumber'},
  { 
    message: ' Select  one of the  operators to perform action:',
    type: 'list',
    name: 'operator',
    choices: ['+:addition', '-:subraction', '*:multiplication', '/:division','%:exponantion','^:power'],
  },
]);

if (answer.operator === '+:addition') {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === '-:subraction') {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === '*:multiplication') {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === '/:division') {
  console.log(answer.firstNumber / answer.secondNumber);
}else  if  (answer.operator=== '%:exponantion'){
  console.log(answer.firstNumber % answer.secondNumber);
}else if  (answer.operator===  '^:power') {
    console.log(answer.firstNumber ^  answer.secondNumber);
}else {
  console.log('please select valid operator');
}

