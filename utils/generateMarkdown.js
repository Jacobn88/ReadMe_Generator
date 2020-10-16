function generateMarkdown(data) {
    let badge;
    switch (data.license){
      case "The Do What the Fuck You Want to Public License":
        badge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
        break;
      case "Eclipse Public License 1.0":
        badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        break;
      case "IBM Public License Version 1.0":
        badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
        break;
    };
  return `
  ${badge}
  # ${data.title}
  
  ## Description:
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions) 

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  Uses ${data.license}.
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  My Github https://github.com/${data.github}.
  Reach out to me at ${data.email} with any questions!`;
}



module.exports = generateMarkdown;
