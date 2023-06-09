// Pkg vars

const inquirer = require('inquirer');
const fs = require('fs');
const markdownGen = require('./tools/markdowngen.js');

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
        message: 'Installation Instructions:'
    },
    {
        name: "usage",
        type: "input",
        message: "Usage Information:"
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

function genReadme (fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Readme Generated & Saved');
    });
};

const handleAnswers = (answers) => {
    console.log(answers);
    genReadme('README.md', markdownGen(answers));
};

// Initialization

function initialize() {
    inquirer
        .prompt(readmeQuestions).then(handleAnswers);
}

initialize();