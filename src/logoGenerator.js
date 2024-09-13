const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./questions");
const { Square, Circle, Triangle } = require("./shapeCreator");

function run() {
  inquirer.prompt(questions).then((answers) => {
    let logo = "";
    switch (answers.shape) {
      case "square":
        logo = createSquare(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        break;
      case "circle":
        logo = createCircle(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        break;
      case "triangle":
        logo = createTriangle(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
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
function createSquare(text, textColor, shapeColor) {
  const square = new Square();
  square.setText(text);
  square.setTextColor(textColor);
  square.setShapeColor(shapeColor);

  return square.create();
}
function createTriangle(text, textColor, shapeColor) {
  const triangle = new Triangle();
  triangle.setText(text);
  triangle.setTextColor(textColor);
  triangle.setShapeColor(shapeColor);

  return triangle.create();
}
function createCircle(text, textColor, shapeColor) {
  const circle = new Circle();
  circle.setText(text);
  circle.setTextColor(textColor);
  circle.setShapeColor(shapeColor);

  return circle.create();
}

module.exports = run;
