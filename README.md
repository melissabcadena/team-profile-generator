
    
# Team Profile Generator    

## Description: 

This back-end Node application allows a user to input the information for the manager and team members of a department. It begins by prompting the user for the manager's information (name, employee ID, email, and office number). Then, the application will ask the user if they would like to add an Engineer, Intern, or complete building their team. If adding another team member, the application will prompt the user for the information required for an engineer (name, employee ID, email, and GitHub name) or the Intern (name, employee ID, email and school). Once the user has opted to finish, an index.html file will be generated into the dist folder. This HTML file will show all of the team members that the user entered in an organized fashion. The email and GitHub links are working links to create an email or to access the Engineer's GitHub page in a new tab. 


## Table of Contents
* [Built With](#builtwith)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)

## Built With
* HTML
* Bootstrap
* Javascript
* Node
* Jest
* Node Inquirer
    

## Installation

To use this application, you will have to clone the code to your own local repo. After this, you must run npm install in the root of the project. Once you are ready to build your team, type 'node index' into the command line to begin the user prompts. 

## Usage

Please see link to walkthrough video below. 

## Tests

All tests can be located within the __tests__ folder of the project. Using jest, they test the creation of the parent, 'Employee', class and the children, 'Manager', 'Engineer', and 'Intern' classes with their respective methods.

## Questions? 

If you have any additional questions, feel free to contact me: 
GitHub: https://github.com/MelissaBCadena 
Email: melissabcadena@gmail.com
