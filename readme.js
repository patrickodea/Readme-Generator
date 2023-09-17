// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your Project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Wrtie a description for your Project.'
},
{
    type: 'input',
    name: 'tableofcontents',
    message: 'Create a table of contents.'
},
{
    type: 'input',
    name: 'installation',
    message: 'Instruct user how to install your project.'
},
{
    type: 'input',
    name: 'usage',
    message: 'How does the user use your project?'
},
{
    type: 'input',
    name: 'license',
    message: 'Input any licenses for your project.'
},
{
    type: 'input',
    name: 'contributing',
    message: 'List any contributors to the project.'
},
{
    type: 'input',
    name: 'tests',
    message: 'Input information for further testing of your project.'
},
{
    type: 'input',
    name: 'questions',
    message: 'Input any questions for your project.'
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`File ${fileName} created successfully.`);
    }
    });
}
// TODO: Create a function to initialize app
function init() { inquirer
    .prompt(questions)
    .then((answers) => {
    
    const readmeContent = `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
${answers.tableofcontents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}
`;

    writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
    console.error('An error occurred:', error);
    });}

// Function call to initialize app
init();
