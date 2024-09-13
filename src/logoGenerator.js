const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./questions");

function run() {
  inquirer.prompt(questions).then((answers) => {
    let logo = "";
    switch (answers.shape) {
      case "square":
        break;
      case "circle":
        break;
      case "triangle":
        break;
    }

    fs.writeFile("./dist/logo.svg", logo, (error) => {
      if (error) {
        console.error(error);
      }
    });
    console.log("generated logo");
  });
}
function createSquare(text, textColor, shapeColor) {}
function createTriangle(text, textColor, shapeColor) {}
function createCircle(text, textColor, shapeColor) {}

module.exports = run;
