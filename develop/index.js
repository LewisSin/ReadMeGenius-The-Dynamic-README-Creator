// ReadmeGenerator.js

const fs = require("fs").promises;
const inquirer = require("inquirer");
const createMarkdown = require("./utils/generateMarkdown");

const questions = [
    { name: "projectTitle", type: "input", message: "Project title:" },
    { name: "projectDescription", type: "input", message: "Project description:" },
    { name: "installInstructions", type: "input", message: "Installation instructions:" },
    { name: "usageInfo", type: "input", message: "Usage information:" },
    { name: "contributionGuidelines", type: "input", message: "Contribution guidelines:" },
    { name: "testInstructions", type: "input", message: "Test instructions:" },
    { name: "githubUsername", type: "input", message: "GitHub username:" },
    { name: "emailAddress", type: "input", message: "Email address:" },
    { name: "license", type: "list", message: "Project license:", choices: ["GNU AGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"] },
];

async function init() {
    console.log("Please fill in your project details to generate a README file.");
    try {
        const responses = await inquirer.prompt(questions);
        const markdownContent = createMarkdown(responses);
        await fs.writeFile("./output/README.md", markdownContent);
        console.log("README.md has been successfully generated in the 'output' folder.");
    } catch (err) {
        console.error("Error generating README.md:", err);
    }
}

init();

module.exports = createMarkdown;
