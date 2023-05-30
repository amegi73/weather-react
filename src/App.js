import logo from "./logo.svg";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch />
        <a href="https://github.com/amegi73/weather-react">
          Open sourced on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
