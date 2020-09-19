const inquirer = require("inquirer"); // allows backend to ask questions and gain feedback
const fs = require("fs"); // creates functionality to write new files
const util = require("util"); 

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Please enter a short description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What problem does this project solve?",
            name: "solution"
        },
        {
            type: "input",
            message: "What technologies did you use?",
            name: "technology"
        },{
            type: "input",
            message: "Are they any particular features that you would like to point out?",
            name: "features"
        },

    ]);
};

promptUser()
    .then(function(response) {
        console.log(response)
        writeFileAsync("./README.md", JSON.stringify(response), function(err) { // create a new file, save the responses and let us know that it was saved
            if(err) {
                console.log("Error: ", err);
            } else {
                console.log("Answer saved successfully!");
            }
        });
    });