// Pkg vars

const inquirer = require('inquirer');
const fs = require('fs');

// Readme Gen Questions

const readmeQuestions = [
    {
        name: 'title',
        type: 'input',
        message: 'Project Title:'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Project Description:'
    },
    {
        name: 'install',
        type: 'input',
        message: 'Project Usagee:'
    },
    {
        name: 'license',
        type: 'input',
        message: 'License:',
        choices: ['MIT License','Creative Commons','GMU', '']
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Contribution Guidelines:'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Test Instructions:'
    },
    {
        name: 'githubUsername',
        type: 'input',
        message: 'Github Username:'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Email:'
    }
];

// Readme Gen Creation

// Initialization