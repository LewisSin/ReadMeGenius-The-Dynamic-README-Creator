// MarkdownGenerator.js

function createMarkdown(details) {
  return `
# ${details.projectTitle}

![License](https://img.shields.io/badge/license-${encodeURIComponent(details.license)}-blue.svg)

## Overview

- [Project Description](#project-description)
- [Installation Instructions](#installation-instructions)
- [Usage Guidelines](#usage-guidelines)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Project Description
${details.projectDescription}

## Installation Instructions
${details.installInstructions}

## Usage Guidelines
${details.usageInfo}

## License
Licensed under the ${details.license}.

## How to Contribute
${details.contributionGuidelines}

## Tests
${details.testInstructions}

## Questions
GitHub: [Visit GitHub profile](https://github.com/${details.githubUsername})
<br>
Email: [Send an email](mailto:${details.emailAddress})

`;
}

module.exports = createMarkdown;
