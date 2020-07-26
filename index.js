const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generate-page.js')

// create team array to push all team members to 
// this will be sent through to generate the html page
const team = [];

function PromptUser() {
    
}

// prompt for manager's info
PromptUser.prototype.managerInfo = function() {
    console.log("Let's build your team!")
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the manager's name?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response.');
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the manager's ID?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response');
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is their email?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response');
                }
            }
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is the office number?', 
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response');
                }
            }
        }
    ])
    // push this manger info to team array and push to next function 
    .then(({ name, id, email, officeNumber}) => {
        manager = new Manager(name, id, email, officeNumber);
        team.push(manager);
        this.menuOptions();
    })
    
}

// ask if user wants to add engineer, intern or to finish building team
PromptUser.prototype.menuOptions = function () {
    inquirer.prompt({
        type: 'list',
        message:"What would you like to do?",
        name: 'action',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building my Team']
    })
    .then(({ action }) => {
        if( action === 'Add Engineer') {
            new PromptUser().engineerInfo()
        } else if (action === 'Add Intern') {
            new PromptUser().internInfo()
        } else {
            generatePage(team)
                .then(response => {
                    console.log(response.message);
                })
            }
        }
    )
}


// get engineer's info
PromptUser.prototype.engineerInfo = function () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the engineer's name?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response.');
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is their employee ID?', 
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response.');
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is their email?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response.');
                }
            }
        },
        {
            type: 'text',
            name: 'githubName',
            message: 'What is their Github name?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response.');
                }
            }
        }
    ])
    .then(({name, id, email, githubName}) => {
        // push info to team array and send back to menu
        engineer = new Engineer(name, id, email, githubName);
        team.push(engineer);
        this.menuOptions();
    })
}

// get interns info
PromptUser.prototype.internInfo = function () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the intern's name?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response.');
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is their employee ID?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response.');
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is their email?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response.');
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: "What is the intern's school name?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please provide a valid response.');
                }
            }
        }
    ])
    // push intern info to team array and sent back to menu 
    .then(({name, id, email, school}) => {
        intern = new Intern(name, id, email, school);
        team.push(intern);
        this.menuOptions();
    })
}




new PromptUser().managerInfo()
