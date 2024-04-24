// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What will you name the README?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is your description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'Unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can you contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests can you run?'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('success!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        const readme = generateMarkdown(data);
        writeToFile('README.md', readme)
    })
}

// Function call to initialize app
init();
