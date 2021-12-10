# Team Profile Manager

  ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
  <br>
  
  This is a Node.js command-line application that collects information about employees on a team and generates an HTML webpage that displays summaries for each individual.
  
  The Team Profile Manager is simple to use and builds a convenient location for all team members' contact information.

  [Tailwindcss](https://tailwindcss.com/), [Node.js](https://nodejs.org/en/), [Inquirer](https://www.npmjs.com/package/inquirer), and [Jest](https://www.npmjs.com/package/jest) were used to create this application. 


  &nbsp;
  # Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Future Developments](#future)
  * [Questions](#questions)
  * [License](#license)
  
---
&nbsp;
  ## Installation:
  To generate your team's HTML page:
  &nbsp;
  1. `git clone` this repository to your local machine
  2. In the project's terminal, run `npm install` to install the dependencies
  3. To run the application, run `node index.js`

  &nbsp;
  ## Usage:
  After following the above instructions for installation, the application will prompt the user with questions using the `Inquirer` package. 

&nbsp;
> The first question is about the manager.
![Beginning of application](https://user-images.githubusercontent.com/87889660/145633535-708a7c87-f044-4142-bdd2-4d355e53b14e.png)

&nbsp;
> After inputting the manager's information. The user can add an engineer or intern.
![Adding team members](https://user-images.githubusercontent.com/87889660/145634014-d93ce655-14bb-4033-836b-d879bc703835.png)

&nbsp;
> After inputting a team member's information. The user may choose to add another. If they select yes, the application will loop through adding another member. 
![Adding additional team members](https://user-images.githubusercontent.com/87889660/145634333-e8ce4b52-deec-4bab-aa4f-b3aea7603a3a.png)

&nbsp;
> When the user is finished adding team members, the application will generate an HTML page in the "dist" folder. 
![Generating HTML page](https://user-images.githubusercontent.com/87889660/145634870-8436585b-3234-45f0-b2ec-c89ba0d01bc6.png)

&nbsp;

  The generated index.html page is responsive for all screen sizes. Clicking on an individual's email will open the user's default email program and populate the TO field with the address of the employee. Additionally, clicking on an engineer's GitHub username will open their profile in a new tab. 
  
&nbsp;
> Example of page.
![Example HTML page](https://user-images.githubusercontent.com/87889660/145637050-96706b14-bccd-4454-bc6e-6c06e6f3412f.png)

&nbsp;

  To see a video of the application, please visit [`here`](https://drive.google.com/file/d/1wtOrhjbLbjpXsmGd51G79-T9T087H2na/view?usp=sharing).
  
  Please visit the [`example-index.html`](https://github.com/edytatar/Team-Profile-Manager/blob/main/dist/example-index.html) file to see a dynamically generated page. 


  &nbsp;
  ## Tests:
  Jest was used to create the [`employee`](https://github.com/edytatar/Team-Profile-Manager/blob/main/dist/example-index.html), [`manager`](https://github.com/edytatar/Team-Profile-Manager/blob/main/dist/example-index.html), [`engineer`](https://github.com/edytatar/Team-Profile-Manager/blob/main/dist/example-index.html), and [`intern`](https://github.com/edytatar/Team-Profile-Manager/blob/main/dist/example-index.html) tests.

  Each of the above tested that the respective employee object was formed and that the getRole function returned the correct role. The employee included a couple other tests. These tests were created to ensure getName, getId, and getEmail returned the correct answer. 

  To run the tests, type `npm run test` in the terminal.

&nbsp;
> Example of the employee test. To view all tests, go to the [`__tests__`](https://github.com/edytatar/Team-Profile-Manager/tree/main/__tests__) folder.
  ```js
// Importing Employee constructor
const Employee = require('../lib/Employee');

const employee = new Employee("Edyta", 13, "edytatar@gmail.com");

// Test: creating employee object
describe('Employee Class', () => {
    it('returns employee properties', () => {
        expect(employee.name).toEqual("Edyta");
        expect(employee.id).toEqual(13);
        expect(employee.email).toEqual("edytatar@gmail.com");
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
        expect(employee.getId()).toBe(employee.id);
    });
});

// Test: gets employee email from getemail()
describe('Employee getEmail', () => {
    it('returns email', () => {
        expect(employee.getEmail()).toBe(employee.email);
    });
});

// Test: gets employee role from getRole()
describe('Employee getRole', () => {
    it('returns role', () => {
        expect(employee.getRole()).toBe("Employee");
    });
});
```

&nbsp;
  ## Future Developments:
  In a future development, the Team Profile Manager:
  
  * Will accomodate more types of teams, not just engineering
  * Will be a fully functional dashboard
  * Managers and employees will be able to add and edit project responsibilities
  * Managers and employees will be able to add and edit events on the calendar

  &nbsp;
  ## Questions:
  If you need any further assistance, my contact information is below.
  * Github: [edytatar](<https://github.com/edytatar>)
  
  * Email: edytatar@gmail.com

  &nbsp;
# License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).