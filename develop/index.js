const http = require("http");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateReadme = require("./utils/generateMarkdown");

const promptQuestions = [
    {
        name: "projectTitle",
        type: "input",
        message: "Enter your project's title:"
    },
    {
        name: "projectDescription",
        type: "input",
        message: "Provide a brief description of your project:"
    },
    {
        name: "installInstructions",
        type: "input",
        message: "How can your project be installed? Please provide steps:"
    },
    {
        name: "usageInfo",
        type: "input",
        message: "How is your project used? Provide instructions:"
    },
    {
        name: "contributionGuidelines",
        type: "input",
        message: "How can others contribute to your project?"
    },
    {
        name: "testInstructions",
        type: "input",
        message: "Provide any test instructions for your project:"
    },
    {
        name: "githubUsername",
        type: "input",
        message: "Enter your GitHub username:"
    },
    {
        name: "emailAddress",
        type: "input",
        message: "Enter your email address:"
    },
    {
        name: "license",
        type: "list",
        message: "Choose a license for your project:",
        choices: ["GNU AGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
    }
];

function generateReadmeFile(fileName, content) {
    fs.writeFile(fileName, content, err => {
        if (err) {
            return console.error(err);
        }
        console.log("Successfully created README.md!");
    });
}

async function startGenerator() {
    try {
        const answers = await inquirer.prompt(promptQuestions);
        const readmeContent = generateReadme(answers);
        generateReadmeFile("./dist/README.md", readmeContent);
    } catch (error) {
        console.error("An error occurred during README generation: ", error);
    }
}

startGenerator();
