// Importing Employee constructor
const Employee = require('../lib/Employee');

const employee = new Employee("Edyta", 13, "edytatar@gmail.com");

// Test: creating employee object
describe('Employee Class', () => {
    it('returns employee properties', () => {
        expect(employee.name).tobe("Edyta");
        expect(employee.id).toEqual(13);
        expect(employee.email).toEqual("employee.email");
    });
});

// Test: gets employee name from getName() 
describe('Employee getName', () => {
    it('returns name', () => {
        expect(employee.getName()).toBe(employee.name);
    });
});

// Test: gets employee id from getId() 
describe('Employee getId', () => {
    it('returns id number', () => {
        expect(employee.getId()).toBe(employee.name);
    });
});

// Test: gets employee email from email()
describe('Employee getEmail', () => {
    it('returns email', () => {
        expect(employee.getEmail()).toBe(employee.email);
    });
});