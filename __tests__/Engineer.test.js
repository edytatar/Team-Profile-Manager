// Importing Engineer constructor
const Engineer = require('../lib/Engineer');

const engineer = new Engineer("Edyta", 13, "edytatar@gmail.com", "edytatar");

// Test: creating Engineer object
describe('Engineer Class', () => {
    it('returns engineer properties', () => {
        expect(engineer.name).toBe("Edyta");
        expect(engineer.id).toBe(13);
        expect(engineer.email).toBe("edytatar@gmail.com");
        expect(engineer.github).toBe("edytatar");
    });
});


// Test: gets engineer role from getRole()
describe('Engineer getRole', () => {
    it('returns role', () => {
        expect(engineer.getRole()).toBe("Engineer");
    });
});
