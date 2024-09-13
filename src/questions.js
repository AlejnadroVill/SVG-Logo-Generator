const questions = [
  {
    type: "list",
    name: "shape",
    message: "choose the shape of the logo",
    choices: ["square", "circle", "triangle"],
  },
  {
    type: "input",
    name: "text",
    message: "What's the text of the logo?",
  },
  {
    type: "input",
    name: "textColor",
    message: "What's the color of the text?",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What's the color of the logo?",
  },
];

module.exports = questions;
