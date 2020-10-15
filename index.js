const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project's title?"
    },
    {
      type: "input",
      name: "description",
      message: "Briefly describe your project."
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?"
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use your application?"
    },
    {
      type: "input",
      name: "contribute",
      message: "Any contribution guidelines?"
    },
    {
      type: "input",
      name: "test",
      message: "Any test instructions?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      }
  ]);
}

  
  promptUser()
  .then(function(answers) {
    const MD = generateMarkdown(answers);

    return writeFileAsync("README.md", MD);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();



// const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);

// function promptUser() {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?"
//     },
//     {
//       type: "input",
//       name: "location",
//       message: "Where are you from?"
//     },
//     {
//       type: "input",
//       name: "hobby",
//       message: "What is your favorite hobby?"
//     },
//     {
//       type: "input",
//       name: "food",
//       message: "What is your favorite food?"
//     },
//     {
//       type: "input",
//       name: "github",
//       message: "Enter your GitHub Username"
//     },
//     {
//       type: "input",
//       name: "linkedin",
//       message: "Enter your LinkedIn URL."
//     }
//   ]);
// }

// function generateHTML(answers) {
//   return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;
// }

// promptUser()
//   .then(function(answers) {
//     const html = generateHTML(answers);

//     return writeFileAsync("index.html", html);
//   })
//   .then(function() {
//     console.log("Successfully wrote to index.html");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
