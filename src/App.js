import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my first React App!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-paragraph">
          React will make writing applications easier by having
          a sigle page app that imports various components that
          make up the page. Chill and listen to some music.
          <br></br>
          <br></br>
          <iframe width="603" height="452" src="https://www.youtube.com/embed/8Yly0-wLigU" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
