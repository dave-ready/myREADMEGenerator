//'require' node modules
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

//const writeFileAsync = util.promisify(fs.writeFile);


//wrap user questions/prompts in a function
const promptUser = () =>
//use inquirer.prompt to create questions/prompts for user
inquirer
  .prompt([
      {
        type:'input',
        message:"Enter your project's title",
        name:'title',
      },
      {
        type:'input',
        message:"Enter a short description of your project",
        name:'description',
    },
    {
        type:'input',
        message:"Enter the installation process",
        name:'installation',
    },
    {
        type:'input',
        message:"Enter the usage of the project",
        name:'usage',
    },
    {
        type:'list',
        message:"Select licences used for your project",
        name:'licenses',
        choices: ['Apache 2.0<img scr="https://opensource.org/licenses/Apache-2.0">',
                  'Boost 1.0<img src="https://www.boost.org/LICENSE_1_0.txt">', 
                  'MIT<img src="https://opensource.org/licenses/MIT">', 
                  'BSD 2.0<img src="https://opensource.org/licenses/BSD-2-Clause">', 
                  'BSD 3.0<img src="https://opensource.org/licenses/BSD-3-Clause">']
    },
    {
        type:'input',
        message:"Enter any contributing info",
        name:'contributing',
    },
    {
        type:'input',
        message:"Enter any tests you are running for your project",
        name:'tests',
    },
    {
        type:'input',
        message:"Enter your GitHub username",
        name:'username',
    },
    {
        type:'input',
        message:"Enter your email address",
        name:'email',
    },

  ])


//Create function creating the template for the readme file
const returnReadMe = (title,
                      description,
                      installation,
                      usage,
                      licenses,
                      contributing,
                      tests,
                      username,
                      email) =>  
                      
  `
  ##${licenses}
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]
  #${title}


  ##Table of Contents
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Contributing](#Contributing)
  -[Tests](#Tests)

  ##Description
  ${description}

  ##Installation
  ${installation}

  ##Usage
  ${usage}

  ##Contributing
  ${contributing}

  ##Tests
  ${tests}
  

  ##Contact
  -Github Username: ${username}
  -E-mail: ${email}
  `;

  //call promptUser function
 promptUser()
 //.then use writeFileAsync to transfer data to README.txt file
 .then((answers) => writeFileAsync('README.md', returnReadMe(answers.title, 
                                                              answers.description, 
                                                              answers.installation, 
                                                              answers.usage, 
                                                              answers.licenses, 
                                                              answers.contributing, 
                                                              answers.tests, 
                                                              answers.username, 
                                                              answers.email)))
 //.then console.log a message when readme is complete
 .then(() => console.log("Your README is now complete!"))
 .catch((err) => console.error(err));

  

  

  
  

 

  


