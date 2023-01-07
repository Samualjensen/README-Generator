// if there is no license returns a placeholder badge
function renderLicenseBadge(license) {
  const licenseLink = renderLicenseLink(license)
  const licenseSection = renderLicenseSection(license)
  let badge = "";

  if (license != 'None') {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

// generates badges based on which license is selected
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// if there is no license, return an empty string
function renderLicenseSection(license) { 
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "## License/n"
    licenseSection += "Please see " + renderLicenseLink(license) + " to get detailed information for this license/n";
  }

  return licenseSection
}


// function to generate readme    
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseLink = renderLicenseLink(data.license)
  const licenseSection = renderLicenseSection(data.license)
  
  return `# ${data.title}
${licenseBadge}
## Description:
${data.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation:
${data.installation}
### Usage:
${data.usage}
### License
${data.license}
### Contributing
${data.contributing}
### Tests
${data.tests}
### Questions
My Github profile can be found at [Github](https://github.com/${data.github}), or contact ${data.author} at ${data.email}.
`
}

module.exports = generateMarkdown;