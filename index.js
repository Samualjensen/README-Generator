// node modules
const inquirer = require('inquirer')
const fs = require('fs')

// link to generatemarkdown.js
const generateMarkdown = require('./util/generatemarkdown')

// questions array 
inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project.",
        },
        {
            type: "list",
            name: "license",
            message: "What type of liscense does your project use?",
            choices: ["MIT", "Apache", "GPL", "None"],
        },
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",
        },
        {
            type: "input",
            name: "tests",
            message: "What command shoud be run to run tests?",
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?",
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        }, {
            type: "input",
            name: "github",
            message: "What is your guthub username?",
        },
        {
            type: "input",
            name: "author",
            message: "What is your name?",
        },
])

// function to generate new README.md file
        .then((answers) => {
            const htmlPageContent = generateMarkdown(answers);

            fs.writeFile('README.md', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Success! README has been created!')
            );
        });



