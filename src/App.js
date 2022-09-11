import logo from "./image/SheCodes-logo.png";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="containter">
        <header className="App-header">
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
