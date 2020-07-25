const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

function PromptUser() {
    
}

// get manager's info
PromptUser.prototype.managerInfo = function() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?' 
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is your employee ID?' 
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email?' 
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is your office number?' 
        }
    ])
    .then(({ name, id, email, officeNumber}) => {
        manager = new Manager(name, id, email, officeNumber);
        team.push(manager);
        console.log(team)
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
            new PromptUser().generatePage();
        }
    })
}

// get engineer's info
PromptUser.prototype.engineerInfo = function () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is their employee ID?' 
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is their email?' 
        },
        {
            type: 'text',
            name: 'githubName',
            message: 'What is their Github name?' 
        }
    ])
    .then(({name, id, email, githubName}) => {
        engineer = new Engineer(name, id, email, githubName);
        team.push(engineer);
        console.log(team)
        this.menuOptions();
    })
}

// get interns info
PromptUser.prototype.internInfo = function () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the intern's name?" 
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is their employee ID?' 
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is their email?' 
        },
        {
            type: 'text',
            name: 'school',
            message: "What is the intern's school name?"
        }
    ])
    .then(({name, id, email, school}) => {
        intern = new Intern(name, id, email, school);
        team.push(intern);
        console.log(team)
        this.menuOptions();
    })
}

// finish building team function and generate page
// PromptUser.prototype.generatePage() {

// }

new PromptUser().managerInfo();
