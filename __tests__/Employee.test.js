// Importing Employee constructor
const Employee = require('../lib/Employee');

// Test: creating employee object
test('creates an employee object', () => {
    const employee = new Employee('Edya', 13, 'edytatar@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Test: gets employee name from getName() 
test('gets employee name', () => {
    const employee = new Employee('Edya', 13, 'edytatar@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Test: gets employee id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Edya', 13, 'edytatar@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Test: gets employee email from email() 
test('gets employee email', () => {
    const employee = new Employee('Edya', 13, 'edytatar@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
