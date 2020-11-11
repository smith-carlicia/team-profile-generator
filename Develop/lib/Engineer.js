// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer {
    constructor(name, id, email, gitHub) {
        super (name, id, email, role);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getGithub () {
        return this.gitHub;
    }

    getRole () {
        return this.role; 
    }
}

module.exports = Engineer; 