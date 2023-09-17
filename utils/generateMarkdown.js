// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    };

    if (license in licenseBadges) {
    return `![License](${licenseBadges[license]})`;
    } else {
    return '';
    }
}

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    };

    if (license in licenseLinks) {
    return `[License Details](${licenseLinks[license]})`;
    } else {
    return '';
    }
}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
    return `This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
    } else {
    return '';
    }
}

  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
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
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
