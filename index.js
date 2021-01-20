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
<<<<<<< HEAD
  <h3>Description</h3>
=======
  <h2>Description</h2>
>>>>>>> 63404c018e709a7c42a15bdff8dada55f91ec6cb
  <p>${description}</p>
  </div>

  <br>

  <div id=Installation>
<<<<<<< HEAD
  <h3>Installation</h3>
=======
  <h2>Installation</h2>
>>>>>>> 63404c018e709a7c42a15bdff8dada55f91ec6cb
  <p>${installation}</p>
  </div>

  <br>
  
  <div id=Usage>
<<<<<<< HEAD
  <h3>Usage</h3>
=======
  <h2>Usage</h2>
>>>>>>> 63404c018e709a7c42a15bdff8dada55f91ec6cb
  <p>${usage}</p>
  </div>

  <br>
  
  <div id=Contributing>
<<<<<<< HEAD
  <h3>Contributing</h3>
=======
  <h2>Contributing</h2>
>>>>>>> 63404c018e709a7c42a15bdff8dada55f91ec6cb
  <p>${contributing}</p>
  </div>

  <br>

  <div id=Tests>
<<<<<<< HEAD
  <h3>Tests</h3>
=======
  <h2>Tests</h2>
>>>>>>> 63404c018e709a7c42a15bdff8dada55f91ec6cb
  <p>${tests}</p>
  </div>

  <br

<<<<<<< HEAD
  <h3>Contact</h3>
=======
  <h2>Contact</h2>
>>>>>>> 63404c018e709a7c42a15bdff8dada55f91ec6cb
  <ul>
  <li>Github Username: ${username}</li>
  <li>E-mail: ${email}</li>
  </ul>
  `;

  

  

  
  

 

  


