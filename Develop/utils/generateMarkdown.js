// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === ''){
    return ''

  }else if(license === 'MIT License'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  }else if(license === 'Mozilla Public License'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  }else if(license === 'Apache License'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  }else if(license === 'GNU Public License'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`

  }else if(license === 'BSD License'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`

  }else if(license === 'Open-Database License'){
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`

  }else if(license === 'Other'){
    return ``

  } else {
    return ``

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === ''){
    return ''

  }else if(license === 'MIT License'){
    return `https://opensource.org/licenses/MIT`

  }else if(license === 'Mozilla Public License'){
    return `https://opensource.org/licenses/MPL-2.0`

  }else if(license === 'Apache License'){
    return `https://opensource.org/licenses/Apache-2.0`

  }else if(license === 'GNU Public License'){
    return `https://www.gnu.org/licenses/gpl-3.0`

  }else if(license === 'BSD License'){
    return `https://opensource.org/licenses/BSD-3-Clause`
    
  }else if(license === 'Open-Source License'){
    return `https://opendatacommons.org/licenses/odbl/`

  }else if(license === 'Other'){
    return ``

  } else {
    return ``

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
