// Node modules
var inquirer = require('inquirer');
const fs = require('fs');

// Team Profiles
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Empty team array
const teamArr = [];

// Manager questions
const addManager = () => {
    console.log(`
    ====================================
    Welcome to the Team Profile Manager.
    ====================================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }

                return 'The manager\'s name is required. Please enter it.';
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s ID number?',
            validate: function (idInput) {
                if (isNaN(idInput)) {
                    return 'Please enter a valid id number.';
                }

                return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email?',
            validate: function (email) {
                let pass = email.match(/\S+@\S+\.\S+/g);
                if (pass) {
                    return true;
                }

                return 'Please enter a valid email.';
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
            validate: function (officeInput) {
                if (isNaN(officeInput)) {
                    return 'Please enter a valid office number.';
                }

                return true;
            },
        }
    ])

        /* After the prompts, save input values to managerInput object 
        and create manager object with input properties */
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            // push manager property values to teamArr
            teamArr.push(manager);
            console.log(manager);
        })
};


// Additional Team Member questions
const addTeamMembers = () => {
    console.log(`
    ======================
      Adding Team Members
    ======================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please select the additional team member\'s role.',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                return 'The employee\'s name is required. Please enter it.'
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee\'s ID number?',
            validate: function (idInput) {
                if (isNaN(idInput)) {
                    return 'Please enter a valid id number.';
                }

                return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email?',
            validate: function (email) {
                let pass = email.match(/\S+@\S+\.\S+/g);
                if (pass) {
                    return true;
                }

                return 'Please enter a valid email.';
            },
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                return 'The employee\'s github username is required. Please enter it.'
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the where the intern goes to school',
            when: (input) => input.role === "Intern",
            validate: school => {
                if (school) {
                    return true;
                }
                return 'The intern\'s school is required. Please enter it.'
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
        .then(employeeData => {
            // Engineer/Intern data 
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }

            teamArr.push(employee);

            if (confirmAddEmployee) {
                return addTeamMembers(teamArray);
            } else {
                return teamArr;
            }
        })

};


// Function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // If there is an error
        if (err) {
            console.log(err);
            return;
        // When the profile has succesfully been created
        } else {
            console.log('Your team profile has been successfully created. See index.html.')
        }
    })
}; 



// Invoking application
addManager()
  .then(addTeamMembers)
  .then(teamArr => {
    return generateHTML(teamArr);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });