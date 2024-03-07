function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [questions](#questions)
  
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  To view my GitHub profile, visit [GitHub] (https://github.com/${data.github}).
  <br/>
  If you have any questions, feel free to reach out to me at [email] (mailto:${data.email}).
  
  
  `;
  }
  
  module.exports = generateMarkdown;