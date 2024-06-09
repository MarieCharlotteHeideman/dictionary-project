import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        <small>
          Coded by{" "}
          <a
            href="https://charlotte-heideman-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Charlotte Heideman
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/MarieCharlotteHeideman/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
        </small>
      </footer>
    </div>
  );
}

export default App;
