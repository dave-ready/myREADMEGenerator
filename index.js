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
  <h3>Description</h3>
  <p>${description}</p>
  </div>

  <br>

  <div id=Installation>
  <h3>Installation</h3>
  <p>${installation}</p>
  </div>

  <br>
  
  <div id=Usage>
  <h3>Usage</h3>
  <p>${usage}</p>
  </div>

  <br>
  
  <div id=Contributing>
  <h3>Contributing</h3>
  <p>${contributing}</p>
  </div>

  <br>

  <div id=Tests>
  <h3>Tests</h3>
  <p>${tests}</p>
  </div>

  <br>

  <h3>Contact</h3>
  <ul>
  <li>Github Username: ${username}</li>
  <li>E-mail: ${email}</li>
  </ul>
  `;

  //call promptUser function
 promptUser()
 //.then use writeFileAsync to transfer data to README.txt file
 .then((answers) => writeFileAsync('README.html', returnReadMe(answers.title, 
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

  

  

  
  

 

  


