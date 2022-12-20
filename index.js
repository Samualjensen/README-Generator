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
            name: 'title',
            message: 'What is the name of your project?',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter a project name.')
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project.',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.')
                }
            }
        },

        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description.')
                }
            }
        },

        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to use?',
            choices: ['Mit', 'GPLv2', 'Apache', 'Other'],
            default: ['MIT'],
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please choose a license.')
                }
            }
        },

        {
            type: 'input',
            name: 'contribution guidelines',
            message: 'If applicable, what should the user know about contributing to this repository?',
        },

        {
            type: 'input',
            name: 'tests',
            message: 'If applicable, please provide any tests for your app and describe how to run them.',
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.')
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.')
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
