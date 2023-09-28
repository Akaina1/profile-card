import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// create link to local display image in img folder:
const displayPic = require("./img/display_pic.png");

// creating a profile card for a user
// Card should include:
// - name
// - location
// - profile image
// - short bio
// - list of languages and frameworks
// - links to various accounts (portfolio, github, linkedin, etc)
// - styled with CSS in a way that is visually appealing

function Avatar() {
  return (
    <img
      className="avatar"
      src={displayPic}
      alt="avatar"
    />
  );
};

function Name() {
  return <h1 className="name">Aaron Dost</h1>;
};

function Location() {
  return <p className="location">Ontario, Canada</p>;
};

function Bio() {
  return <p className="bio">A Computer Science student with a  passion for code and technology. 
  With a strong foundation in core programming languages I enjoy tackling new projects and learning
  new skills.</p>;
};

function Languages() {
  return (
    <ul className="skill-list">
      <li className="skill">C</li>
      <li className="skill">C++</li>
      <li className="skill">C#</li>
      <li className="skill">JavaScript</li>
      <li className="skill">CSS</li>
      <li className="skill">HTML</li>
      <li className="skill">React</li>
    </ul>
  );
};

function Links() {
  return (
    <div className="links-list">
      <a className="link" href="https://github.com/Akaina1">GitHub</a>
      <a className="link" href="https://akaina1.github.io/">Portfolio</a>
    </div>
  );
};

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Name />
        <Location />
        <Bio />
        <Languages />
        <Links />
      </div>
    </div>
  );
};

// render the App component below:

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);