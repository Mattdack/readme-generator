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
        choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "Mozilla Public License 2.0"],
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
    let badge = ``;
    if (response.license === "MIT License") {
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (response.license === "Apache License 2.0") {
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }else if (response.license === "GNU General Public License v3.0") {
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else {
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } 

    const content = 
`# ${response.title} ${badge}

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
${response.install}

## Usage
${response.usage}

## License
${response.license} covers the contents of this repository. Please refer to the license documentation for more information. You can do so by googling ${response.license}.

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
If you are interested in viewing more of my work, you can access public examples at [github page](github.com/${response.github})

If you have questions about this project, you can contact me at ${response.email}
`
    fs.writeFile(`${response.title}.md`, content, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
  });