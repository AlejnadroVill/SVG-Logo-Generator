const { Circle, Triangle, Square } = require("./shapeCreator");

describe("Shapes", () => {
  it("Square was creates successfully", () => {
    let square = new Square();
    square.setText("OMG");
    square.setShapeColor("red");
    square.setTextColor("white");
    const result = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="5" ry="5" fill="red" />
        <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="40"
        fill="white"
        >
        OMG
        </text>
    </svg>`;
    expect(square.create()).toEqual(result);
  });
  it("Triangle was creates successfully", () => {
    let trianle = new Triangle();
    trianle.setText("OMG");
    trianle.setShapeColor("red");
    trianle.setTextColor("white");
    const result = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150,0 250,200 50,200" style="fill: red" />
      <text
        x="50%"
        y="75%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="56"
        fill="white"
      >
        OMG
      </text>
    </svg>
    `;
    expect(trianle.create()).toEqual(result);
  });
  it("Circle was creates successfully", () => {
    let circle = new Circle();
    circle.setText("OMG");
    circle.setShapeColor("red");
    circle.setTextColor("white");
    const result = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle r="100" cx="150" cy="100" fill="red" />
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="72"
        fill="white"
      >
        OMG
      </text>
    </svg>
    `;
    expect(circle.create()).toEqual(result);
  });
});
