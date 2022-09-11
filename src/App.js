import logo from "./image/SheCodes-logo.png";
import bg from "./image/bg.jpeg";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        width: `100%`,
        height: `100%`,
      }}
    >
      <div className="containter">
        <header className="App-header m-0">
          <img src={logo} className="SheCodes-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="flower" />
        </main>
        <footer className="text-center">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/asami-uehara-704999223/"
              target="_blank"
              rel="noreferrer"
            >
              Asami Uehara{" "}
            </a>
            and is open-sourced on{" "}
            <a
              href="https://github.com/asami0119/dictionary-app-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>
            and{" "}
            <a
              href="https://heartfelt-pothos-ae393b.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
