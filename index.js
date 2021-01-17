//'require' node modules
const fs = require('fs');
const inquirer = require('inquirer');

//use inquirer.prompt to create questions/prompts for user

inquirer
  .prompt([
      {
        type:'input',
        message:"Enter your project's title",
        name:'Title',
      },
      {
        type:'input',
        message:"Enter a short description of your project",
        name:'Description',
    },
    {
        type:'input',
        message:"Enter the installation process",
        name:'Installation',
    },
    {
        type:'input',
        message:"Enter the usage of the project",
        name:'Usage',
    },
    {
        type:'list',
        message:"Select licences used for your project",
        name:'Lincenses',
        choices: 'Apache 2.0','Boost 1.0', 'MIT', 'GNU 2.0', 'GNU 3.0',
    },
    {
        type:'input',
        message:"Enter any contributing info",
        name:'Contributing'
    },
    {
        type:'input',
        message:"Enter any tests you are running for your project",
        name:'Tests',
    },
    {
        type:'input',
        message:"Enter your GitHub username",
        name:'Questions',
    },
    {
        type:'input',
        message:"Enter your email address",
        name:'Questions',
    },

  ])
