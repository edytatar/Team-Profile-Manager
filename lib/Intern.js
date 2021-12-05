// Importing Employee constructor
const Employee = require('./Employee');

// Extending Employee constructor to include intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        // From Employee constructor
        super (name, id, email);
        // for Intern constructor
        this.school = school;
    }

    // Returning Intern's school from input
    getschool() {
        return this.school;
    }

    // Overriding employee role to manager
    getRole() {
        return "Intern";
    }
}

// Exporting
module.exports = Intern;