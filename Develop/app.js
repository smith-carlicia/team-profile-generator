const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");


// // Write code to use inquirer to gather information about the development team members,
// // and to create objects for each team member (using the correct classes as blueprints!)

// // After the user has input all employees desired, call the `render` function (required
// // above) and pass in an array containing all employee objects; the `render` function will
// // generate and return a block of HTML including templated divs for each employee!

// // After you have your html, you're now ready to create an HTML file using the HTML
// // returned from the `render` function. Now write it to a file named `team.html` in the
// // `output` folder. You can use the variable `outputPath` above target this location.
// // Hint: you may need to check if the `output` folder exists and create it if it
// // does not.

// // HINT: each employee type (manager, engineer, or intern) has slightly different
// // information; write your code to ask different questions via inquirer depending on
// // employee type.

// // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// // and Intern classes should all extend from a class named Employee; see the directions
// // for further information. Be sure to test out each class and verify it generates an
// // object with the correct structure and methods. This structure will be crucial in order
// // for the provided `render` function to work! ```
let teamMembers = [];

const employee = [
    {
        type: "list",
        message: "Would you like to add a new employee or generate current team information?",
        name: "Add",
        choices: ["Add member", "Generate current team"],
        }
];

const role = [
    {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

const manager = [
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
];

const engineer = [
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
];

const intern = [
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
];

function init() {
    console.log(init);
    inquirer.prompt(employee).then((choices) => {
        console.log(employee);
        if(choices.Add === "Add member") {
            addMember();
        } else {
            createHTML();
        }
    })
    };



    function addMember() {
        inquirer.prompt(role).then((choices) => {
          if (role === "manager") {
            inquirer.prompt(manager).then((answers) => {
              manager = new Manager(
                choices.role,
                answers.name,
                answers.role,
                answers.idNumber,
                answers.email,
                answers.officeNumber,
              );
              teamMembers.push(manager);
              console.log(manager);
              init();
            });
          } else if (role === "engineer") {
            inquirer.prompt(engineer).then((answers) => {
                engineer = new Engineer(
                answers.name,
                answers.role,
                answers.idNumber,
                answers.email,
                answers.gitHub,
              );
              teamMembers.push(engineer);
              console.log(engineer);
              init();
            });
          } else if (role === "Intern") {
            inquirer.prompt(intern).then((answers) => {
              intern = new Intern(
                answers.name,
                answers.role,
                answers.idNumber,
                answers.email,
                answers.school,
              );
              teamMembers.push(intern);
              console.log(intern);
              init();
            });
          }
        });
      }
      
      console.log(teamMembers);
      
    //   function createHTML() {
    //     if (!fs.existsSync(OUTPUT_DIR)) {
    //       fs.mkdirSync(OUTPUT_DIR);
    //     }
    //     fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    //   }


      init();

    //creating a buil function 

    function createHTML () {
         //check to see if the file you desire to create already exists.
         //if statement

         //if there is not a folder in the system - make folder
         if(!fs.existsSync(OUTPUT_DIR)) {
             //this will make the folder and sync the data
             fs.mkdirSync(OUTPUT_DIR)
         }

         fs.writeFileSync(outputPath, render(teamMembers),  "utf-8")

    }






// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// const render = require("./lib/htmlRenderer");
// let teamMembers = [];
// // var employeeQuestion = [
// //  {
// //    type: "list",
// //    message: "This should work.",
// //    name: "add",
// //    choices: ["Add member", "Build team"],
// //  },
// // ];
// function init() {
//  inquirer.prompt(initialQuestion).then((choices) => {
//    if (choices.add === "Add member") {
//      addMember();
//    }else {
//      createHTML();
//    }
//  });
//  const initialQuestion = [
//      {
//        type: "list",
//        message:
//          "Would you like to add a new employee or generate current team information?",
//        name: "Add",
//        choices: ["Add member", "Generate current team"],
//      },
//     ];
//  function memberInfo(){
//      inquirer.prompt([
//         {
//             type: "input",
//             message: "What is your name?",
//             name: "name",
//           },
//           {
//             type: "input",
//             message: "What is your ID number?",
//             name: "id",
//           },
//           {
//             type: "input",
//             message: "What is your email address?",
//             name: "email",
//           },
//      ]);
      
// }
//  function Role() {
//    inquirer.prompt([
//      {
//        type: "list",
//        message: "What is your role?",
//        name: "role",
//        choices: ["Manager", "Engineer, Intern"],
//      },
//    ]);
//  }
//  function Manager() {
//    inquirer.prompt([
//      {
//        type: "input",
//        message: "What is your office number?",
//        name: "officeNumber",
//      },
//    ]);
//  }
//  function engineer() {
//    inquirer.prompt([
  
//      {
//        type: "input",
//        message: "What is your GitHub username?",
//        name: "gitHub",
//      },
//    ]);
//  }
//  // The intern method - once the init methos is ran - this function will automatically be available for use
//  function Intern() {
//    inquirer.prompt([
//      {
//        type: "input",
//        message: "What school are you currently attending?",
//        name: "school",
//      },
//    ]);
//  }
// }
// function addMember() {
//  inquirer.prompt(memberInfo).then((answers)) => {
//     if (input.add === "member") {
//         inquirer.prompt(memberInfo).then((answers) => {
//             member = new member(
//                 answers.name,
//                 answers.id,
//                 answers.email,

//                 addMember();
//             )
//         }
//         )};
 
//  inquirer.prompt(engineer).then(({ role }) => {
//    if (role === "engineer") {
//      inquirer.prompt(engineer).then((answers) => {
//        engineer = new engineer(
//          answers.github
//        );
//        teamMembers.push(engineer);
//        console.log(engineer);
//        engineer();
//      });
//    } else if (role === "intern") {
//      inquirer.prompt(intern).then((answers) => {
//        intern = new intern(
//          answers.school
//        );
//        teamMembers.push(intern);
//        console.log(intern);
//        startApp();
//      });
//    } else if (role === "manager") {
//      inquirer.prompt(manager).then((answers) => {
//        manager = new manager(
//          answers.officeNumber
//        );
//        teamMembers.push(manager);
//        console.log(manager);
//        startApp();
//      });
//    }
//  });
// };





// console.log(teamMembers);
// function createHTML() {
//  if (!fs.existsSync(OUTPUT_DIR)) {
//    fs.mkdirSync(OUTPUT_DIR);
//  }
//  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
// }
// init();