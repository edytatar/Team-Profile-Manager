// Importing Intern constructor 
const Intern = require('../lib/Intern');

const intern = new Intern("Edyta", 13, "edytatar@gmail.com", "Northwestern");

// Test: creating Intern object
describe('Intern Class', () => {
    it('returns intern properties', () => {
        expect(intern.name).toBe("Edyta");
        expect(intern.id).toBe(13);
        expect(intern.email).toBe("edytatar@gmail.com");
        expect(intern.school).toBe("Northwestern University");
    });
});

// Test: gets intern's school name from getSchool()
describe('Intern getSchool', () => {
    it('returns school name', () => {
        expect(intern.getSchool()).toBe(intern.school);
    });
});