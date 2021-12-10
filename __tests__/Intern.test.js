// Importing Intern constructor 
const Intern = require('../lib/Intern');

const intern = new Intern("Edyta", 13, "edytatar@gmail.com", "Northwestern University");

// Test: creating Intern object
describe('Intern Class', () => {
    it('returns intern properties', () => {
        expect(intern.name).toBe("Edyta");
        expect(intern.id).toBe(13);
        expect(intern.email).toBe("edytatar@gmail.com");
        expect(intern.school).toBe("Northwestern University");
    });
});

// Test: gets intern role from getRole()
describe('Intern getRole', () => {
    it('returns role', () => {
        expect(intern.getRole()).toBe("Intern");
    });
});
