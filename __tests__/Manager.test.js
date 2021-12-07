// Importing Manager constructor 
const Manager = require('../lib/Manager');

const manager = new Manager("Edyta", 13, "edytatar@gmail.com", 345);

// Test: creating Manager object  
describe('Manager Class', () => {
    it('returns manager properties', () => {
        expect(manager.name).toBe("Edyta");
        expect(manager.id).toBe(13);
        expect(manager.email).toBe("edytatar@gmail.com");
        expect(manager.officeNumber).toBe(345);
    });
});

// Test: gets manager role from getRole()
describe('Manager getRole', () => {
    it('returns role', () => {
        expect(manager.getRole()).toBe("Manager");
    });
});