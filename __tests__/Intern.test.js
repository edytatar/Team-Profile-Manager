// Importing Intern constructor 
const Intern = require('../lib/Intern');

// Test: creating Intern object
test('creates an Intern object', () => {
    const intern = new Intern('Edya', 13, 'edytatar@gmail.com', 'Northwestern University');

    expect(intern.school).toEqual(expect.any(String));
});

// Test: gets intern's school name username from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail', 'Northwestern University');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Test: gets intern's role from from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail.com', 'Northwestern University');

    expect(intern.getRole()).toEqual("Intern");
});