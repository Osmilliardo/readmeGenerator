const inquirer = require('inquirer')
const fs = reqiuire('fs')

const generateREADME = ({ title, description, install, usage, contribute, testing, license, gitHubName, email}) =>
    `
    #${title}

    ##Table of Contents

    -Description
    -Installation Instructions
    -Usage Instructions
    -How to Contribute
    -Testing
    -Licensing
    -Contact Information

    ##Description

    ${description}

    ##Installation Instructions

    ${install}

    ##Usage Instructions

    ${usage}

    ##How to Contribute

    ${contribute}

    ##Testing

    ${testing}

    ##Licensing

    ${license}

    ##Contact Information

    GitHub account: ${gitHubName}

    If you have further questions I can be reached here: ${email}

    `

inquirer
    .prompt([
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

    ])
    .then((data) => {
        const newREADME = generateREADME(data)

        fs.writeFile('README.md', newREADME, (err) =>
            err ? console.log(err) : console.log('Created New Readme')
        )
    })