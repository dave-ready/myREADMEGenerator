//'require' node modules
const fs = require('fs');
const inquirer = require('inquirer');

//use inquirer. to create questions/prompts for user

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
        choices: ['Apache 2.0','Boost 1.0', 'MIT', 'BSD 2.0', 'BSD 3.0']
    },
    {
        type:'input',
        message:"Enter any contributing info",
        name:'contributing'
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

  ]).then(({title, description, installation, usage, licenses, contributing, tests, username,email}) => {


//Create README Template as a const
  const readMeTemplate = `

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

  ##Contact
  -Github Username: ${username}
  -E-mail: ${email}
  `;
  generateNewFile(title, readMeTemplate)
});

//Create a function to generate readme using file system

function generateNewFile(fileName, data) {
    fs.writefile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err) => {
        if(err) {
            console.log(err)
        }
        console.log("Your README is now complete!!");

    })
}
