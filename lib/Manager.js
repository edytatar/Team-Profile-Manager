// Importing Employee constructor 
const Employee = require('./Employee');

// Extending the Employee constructor to include manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // Getting values from Employee constructor
        super (name, id, email); 
        // Manager constructor
        this.officeNumber = officeNumber; 
    }

    // Override employee role to manager 
    getRole () {
        return "Manager";
    }
}

// Exporting
module.exports = Manager; 