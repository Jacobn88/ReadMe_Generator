// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description:
  ${data.description}
  
  ## Table of Contents
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  My Github https://github.com/${data.github}.
  Reach out to me at ${data.email} with any questions!`;
}



module.exports = generateMarkdown;
