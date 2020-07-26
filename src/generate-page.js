const fs = require("fs"); 

const generateTeamHTML = team => {

    // empty array to push each employee's html to
    const entireTeamHTML = []

    // make manager card
    const managerHTML = manager => {
        
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getName()}</li>
                <li class="list-group-item">ID: ${manager.getID()}</li>
                <li class="list-group-item">Email: ${manager.getEmail()} </li>
                <li class="list-group-item">School: ${manager.officeNumber}</li>
            </ul>
            </div>
        `
    }

    // goes through team array to find any Manager roles and creates new manager array
    entireTeamHTML.push(team.filter(employee => employee.getRole() === "Manager")
    // goes through new array and pushes to manager HTML function to create manager's card 
    .map(manager => managerHTML(manager)))

    // create and push engineer html
    const engineerHTML = engineer => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                Engineer
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getName()}</li>
                <li class="list-group-item">ID: ${engineer.getID()}</li>
                <li class="list-group-item">Email: ${engineer.getEmail()} </li>
                <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
            </ul>
            </div>
        
        `
    }

    entireTeamHTML.push(team.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerHTML(engineer)))

    const internHTML = intern => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getName()}</li>
                <li class="list-group-item">ID: ${intern.getID()}</li>
                <li class="list-group-item">Email: ${intern.getEmail()} </li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
            </div>
        `
    }

    entireTeamHTML.push(team.filter(employee => employee.getRole() === "Intern")
        .map(intern => internHTML(intern)))

    return entireTeamHTML.join('')
} 

const generateEntireHTML = team => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <title>Team Profile</title>
    </head>
  
    <body>

    <h1 class="bg-dark navbar navbar-dark sticky-top text-light">My Team</h1>

    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <!-- insert team info here -->
                ${generateTeamHTML(team)}
            </div>
        </div>
    </div>

    </body>
    </html>
    `;
};

module.exports = team => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generateEntireHTML(team), err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your team profile page has been created. Please see the dist folder!'
            })
        })
    });
}; 


    
