// Importing Employee constructor
const Employee = require('./Employee');

// Extending Employee constructor to include engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
    // Values from Employee constructor
    super (name, id, email);
    // for Engineer constructor
    this.github = github;
    }

    // Overriding employee role to engineer
    getRole() {
        return "Engineer";
    }

}

//Exporting
module.exports = Engineer;