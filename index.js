// node modules
const inquirer = require('inquirer.');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// questions array 
const questions = () =>
    inquirer.prompt([
        {
            name: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            name: "input",
            name: "description",
            message: "Please write a short description of your project.",
        },
        {
            name: "input",
            name: "license",
            message: "What type of liscense does your project use?",
            choices: ["MIT", "Apache", "GPL", "BSD", "None"],
        },
        {
            name: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",
        },
        {
            name: "input",
            name: "tests",
            message: "What command shoud be run to run tests?",
        },
        {
            name: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?",
        },
        {
            name: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?",
        },
        {
            name: "input",
            name: "email",
            message: "What is your email?",
        }, {
            name: "input",
            name: "github",
            message: "What is your guthub username?",
        },
        {
            name: "input",
            name: "author",
            message: "What is your name?",
        },
    ]);

function generateMarkdown(data) {

    return `# ${data.title}
        ${badge}
        ${data.description}
        ## Table of Contents:
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)
        ### Installion:
        ${data.installations}
        ### Usage:
        ${data.usage}
        ### License
        ${data.license}
        ### Contributing
        ${data.contributing}
        ### Tests
        ${data.tests}
        ### Questions
        If you have any questions contact me on [Github](https://github.com/${data.github}), or contact ${data.author} at ${data.email}
        `
}

questions()
.then((data) => writeFileAsync('generatedREADME.md',
generateMarkdown(data)))
.then(() => console.log('Success!'))
.catch((err) => console.error(err));
