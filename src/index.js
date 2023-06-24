var React = require("react");
var ReactDOM = require("react-dom");

const image = "https://picsum.photos/200?grayscale";

ReactDOM.render(
  <div>
    <h1 className="heading"> hello world</h1>
    <p>this is a paragraph</p>
    <ul>
      <li>milk</li>
      <li>cheese</li>
      <li>eggs</li>
    </ul>
    <div className="images">
      <img src={image} alt="random photo"></img>
      <img src="https://images.healthshots.com/healthshots/en/uploads/2023/01/06161102/skimmed-milk-770x436.jpg"></img>
      <img src="https://interfood.imgix.net/assets/Cheese-3.jpeg?auto=compress%2Cformat&fit=clip&h=525&q=60&s=ffd964426144e90e0689368212925606"></img>
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Fried_Egg_2.jpg"></img>
    </div>
  </div>,
  document.getElementById("root")
);
