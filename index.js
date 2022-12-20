// node modules
const inquirer = require('inquirer');
const fs = require('fs');

// link to where README is generated
const generateReadMe = require('./utils/generateMarkdown.js');

// questions array
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title';
            message: 'What is your project title?';
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter a project title!')
                }
            }
        },

        {
            type: 'input',
            name: '';
            message: '';
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter !')
                }
            }
        },

        {
            type: 'input',
            name: '';
            message: '';
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter !')
                }
            }
        },

        {
            type: 'input',
            name: '';
            message: '';
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter !')
                }
            }
        },

        {
            type: 'input',
            name: '';
            message: '';
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter !')
                }
            }
        },

        {
            type: 'input',
            name: '';
            message: '';
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter !')
                }
            }
        },

        {
            type: 'input',
            name: '';
            message: '';
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter !')
                }
            }
        },

        {
            type: 'input',
            name: '';
            message: '';
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter !')
                }
            }
        },
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
