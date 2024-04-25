// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
// This calls the generateMarkdown file so we can use it this file.
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What will you name the README?'.blue
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is your description?'.rainbow
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?'.yellow
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?'.cyan
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT'.cyan, 'Apache-2.0'.magenta, 'GPL-3.0'.yellow, 'Unlicense'.red]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can you contribute?'.red
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests can you run?'.black
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username?'.magenta
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'.america
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('success!'.green);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        // This is calling on a function from another file to help make the README.
        const readme = generateMarkdown(data);
        writeToFile('README.md', readme)
    })
}

// Function call to initialize app
init();
