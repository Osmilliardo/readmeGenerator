// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = reqiuire('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the Title of your project',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description',
    },

    {
        type: 'input',
        name: 'install',
        message: 'Please enter installation instructions if any',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use the application',
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'Please explain how to contribute the to project',
    },

    {
        type: 'input',
        name: 'testing',
        mesasge: 'Please explain how to test the application'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please select the usage license',
        choices: ['GNU Public License', 'MIT License', 'Apache License', 'BSD License', 
                  'Mozilla Public License', 'Open-Source License', 'Eclipse Public License',
                  'Microsoft Public License', 'Boost Software License', 'Other'
                ],
    },

    {
        type: 'input',
        name: 'githubName',
        message: 'Please enter your github username',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address in case of any further questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const fileName = 'README.md'
        const data = generateMarkdown(answers)
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
