// Node modules
var inquirer = require('inquirer');
const fs = require('fs');

// Team Profiles
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

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

        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};




addManager();