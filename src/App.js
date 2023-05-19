import Navbar from "./component/Navbar";
import TrendingSongCard from "./component/TrendingSongCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="main-container">
        <Navbar />
      <TrendingSongCard/> 
      </section>
    </div>
  );
}

export default App;
