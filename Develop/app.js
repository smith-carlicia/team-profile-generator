const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
let teamMembers = [];

function init() {
    inquirer.prompt(employeeQuestion).then((choices) => {
        console.log(employeeQuestion);
        if(choices.add === "Add member") {
            addMember();
        } else {
            createHTML();
        }
    })

    function Employee ()
    {
        inquirer.prompt([
            {
            type: "list",
            message: "Would you like to add a new employee or generate current team information?",
            name: "Add",
            choices: ["Add member", "Generate current team"],
            }
        ]);
    };
    
    function Role ()
    {
        inquirer.prompt([
            {
                type: "list",
                message: "What is your role?",
                name: "role",
                choices: ["Manager", "Engineer, Intern"],
            }
        ]);
    };

    function Manager ()
    {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",
            },
            {
                type: "input",
                message:"What is your office number?",
                name: "officeNumber",
            },
        ]);
    };

    function Engineer ()
    {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type:"input",
                message: "What is your ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "gitHub",
            },
        ]);
    }
// The intern method - once the init methos is ran - this function will automatically be available for use
    function Intern ()
    {
        inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            messgae: "What is your email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What school are you currently attending?",
            name: "school",
        },
    ])
    };
    };

    init();


    // //creating a buil function 

    // function buildMe () {
    //      //check to see if the file you desire to create already exists.
    //      //if statement

    //      //if there is not a folder in the system - make folder
    //      if(!fs.existsSync(OUTPUT_DIR)) {
    //          //this will make the folder and sync the data
    //          fs.mkdirSync(OUTPUT_DIR)
    //      }

    //      fs.writeFileSync(outputPath, render(teamMembers),  "utf-8")

    // }