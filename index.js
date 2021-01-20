//'require' node modules
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


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
  <p>${licenses}</p>
  <br>
  <h1>${title}</h1>


  <h2>Table of Contents</h2>
  <ul>
  <li><a href="#Description">Description</a></li>
  <li><a href="#Installation">Installation</a></li>
  <li><a href="#Usage">Installation</a></li>
  <li><a href="#Contributing">Contributing</a></li>
  <li><a href="#tests">Tests</a></li>
  </ul>

  <div id=Description>
  <h2>Description</h2>
  <p>${description}</p>
  </div>

  <br>

  <div id=Installation>
  <h2>Installation</h2>
  <p>${installation}</p>
  </div>

  <br>
  
  <div id=Usage>
  <h2>Usage</h2>
  <p>${usage}</p>
  </div>

  <br>
  
  <div id=Contributing>
  <h2>Contributing</h2>
  <p>${contributing}</p>
  </div>

  <br>

  <div id=Tests>
  <h2>Tests</h2>
  <p>${tests}</p>
  </div>

  <br

  <h2>Contact</h2>
  <ul>
  <li>Github Username: ${username}</li>
  <li>E-mail: ${email}</li>
  </ul>
  `;

  

 

  


