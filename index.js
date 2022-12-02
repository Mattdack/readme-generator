const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writePromise = util.promisify(fs.writeFile);
const readPromise = util.promisify(fs.readFile);

const init = async () => {
    
}
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description about your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please provide directions for the installation process for your project.',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Please provide directions on how to use your project.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please describe who contributed to this project and the manner of their contributions.',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Please describe any tests that you have included in your project and how to utilize them for further development.',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'Which license would you like to use to protect your project?',
        choices: ["MIT", "Yale", "University of California"],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
      {
        type: 'email',
        message: 'What is your email?',
        name: 'email',
      },
  ])
  .then((response) => {
    const content = 
`# ${response.title}

## Description
${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installatio}

## Usage
${response.usage}

## License
${response.license} covers the contents of this repository. Please refer to the license documentation for more information. You can do so by googling ${response.license}.

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
If you are interested in viewing more of my work, you can access public examples at github.com/${response.github}

If you have questions about this project, you can contact me at ${response.email}
`
    fs.writeFile(`${response.title}.md`, content, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
  });