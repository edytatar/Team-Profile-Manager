// Importing Manager constructor 
const Manager = require('../lib/Manager');

// Test: creating Manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Edya', 13, 'edytatar@gmail.com', 345);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Test: gets manager's role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Edya', 13, 'edytatar@gmail.com', 345);

    expect(manager.getRole()).toEqual("Manager");
});