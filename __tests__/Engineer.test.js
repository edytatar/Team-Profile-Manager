
// Importing Engineer constructor
const Engineer = require('../lib/Engineer');

// Test: creating Engineer object 
test('creates an Engineer object', () => {
    const engineer = new Engineer('Edya', 13, 'edytatar@gmail.com', 'edytatar');

    expect(engineer.github).toEqual(expect.any(String));
});

// Test: gets engineer username from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Edya', 13, 'edytatar@gmail.com', 'edytatar');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Test: gets engineer role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Edya', 13, 'edytatar@gmail.com', 'edytatar');

    expect(engineer.getRole()).toEqual("Engineer");
});