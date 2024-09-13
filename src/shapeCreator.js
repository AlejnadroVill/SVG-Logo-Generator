class Shape {
  constructor() {
    this.text = null;
    this.textColor = null;
    this.shapeColor = null;
  }
  setText(newText) {
    this.text = newText;
  }
  setTextColor(newTextColor) {
    this.textColor = newTextColor;
  }
  setShapeColor(newShapeColor) {
    this.shapeColor = newShapeColor;
  }
}

class Square extends Shape {
  create() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="5" ry="5" fill="${this.shapeColor}" />
        <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="40"
        fill="${this.textColor}"
        >
        ${this.text}
        </text>
    </svg>`;
  }
}
class Circle extends Shape {
  create() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle r="100" cx="150" cy="100" fill="${this.shapeColor}" />
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="72"
        fill="${this.textColor}"
      >
        ${this.text}
      </text>
    </svg>
    `;
  }
}
class Triangle extends Shape {
  create() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150,0 250,200 50,200" style="fill: ${this.shapeColor}" />
      <text
        x="50%"
        y="75%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="56"
        fill="${this.textColor}"
      >
        ${this.text}
      </text>
    </svg>
    `;
  }
}

module.exports = { Square, Circle, Triangle };
