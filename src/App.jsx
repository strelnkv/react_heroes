import "./App.css";
import Herocard from "./Herocard";
import data from "./heroes.json";

function App() {
  return (
    <div className="App">
      {data.heroes.map((hero) => (
        <Herocard
          url={hero.url}
          name={hero.name}
          description={hero.description}
          age={hero.age}
          superpower={hero.superpower}
        />
      ))}
    </div>
  );
}

export default App;
