const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);

const projectLicense = 
[
    "The Do What the Fuck You Want to Public License",
    "Eclipse Public License 1.0",
    "IBM Public License Version 1.0"
]

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
            type: "list",
            message: "Add a license?",
            name: "license",
            choices: projectLicense
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
    ])


}


promptUser()
    .then(function (answers) {
        const MD = generateMarkdown(answers);

        return writeFileAsync("README.md", MD);
    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err);
    }).then((data) => {

    });