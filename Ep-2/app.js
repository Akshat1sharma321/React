// <div class="header" id="head">
//   <h1>DAY-2 REACT</h1>
// </div>
// <div class="budi" id="bud">
//   <h2>Todady we are learning about NPM and package managers okay....</h2>
// </div>
// <div class="footer" id="foot">
//   <h6>Made with love from Akshat</h6>
// </div>
const headi = ReactDOM.createRoot(document.getElementById("head"));
const header = React.createElement("h1", {}, "DAY-2 REACT");
headi.render(header);

const budi = ReactDOM.createRoot(document.getElementById('bud'));
const bodyText = React.createElement(
  "h2",
  {},
  "today we are learning about NPM and package managers okay...."
);
budi.render(bodyText);

const footi = ReactDOM.createRoot(document.getElementById('foot'));
const footTxt = React.createElement("h3", {}, "Made with love from Akshat");
footi.render(footTxt);