// Badge render function

function renderBadge (license) {
    if (license === 'MIT License') {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'Creative Commons') {
        return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
    } else if (license === 'GMU') {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else return '';
}

// license link func

function renderLink (license) {
    if (license === 'MIT License') {
        return '(https://opensource.org/licenses/MIT)';
    } else if (license === 'Creative Commons') {
        return '(http://creativecommons.org/publicdomain/zero/1.0/)';
    } else if (license === 'GMU') {
        return '(https://www.gnu.org/licenses/gpl-3.0)';
    } else return '';
}

// Render the section function

function renderLicenseSection (license) {
    if (license === 'MIT License') {
        return 'MIT License';
    } else if (license === 'Creative Commons') {
        return 'Creative Commons';
    } else if (license === 'GMU') {
        return 'GMU';
    } else return '';
}

// markdown gen

function markdownGen (data) {
    return `# ${data.title}

    ## Table of Contents
  
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${data.install}
    
    ## Usage
    
    ${data.usage}
    
    ## License
    
    ${renderLicenseSection(data.license)}
    ${renderLink(data.license)}
    ${renderBadge(data.license)}
    
    ## How to Contribute
    
    ${data.contribution}
    
    ## Tests
    
    ${data.tests}
  
    ## Questions
  
    GitHub Username: ${data.githubUsername}
  
    https://github.com/${data.githubUsername}
  
    Email: ${data.email}.
  `;
}

module.exports = markdownGen;