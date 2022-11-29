import "./App.css";
import Api from "./components/Apicall";

function App() {
  return (
    <div className="App">
      <form>
        <input id="word" />
        <button onClick={Api} type="button">Submit</button>
      </form>
      <div className="white">
        <h2>Word: <span id="wordMeaning">Hello</span></h2>
        <h4>Definition:<span id="definition">used as a greeting or to begin a phone conversation.</span></h4>
        <h5>Example:<span id="example">hello there, Katie!</span></h5>
        <h4>phonetics: <span id="phonetics">həˈləʊ</span></h4>
        <h4>Synonym: <span id="synonyms"></span></h4>
        <h4>Antonym: <span id="antonym">bye, goodbye</span></h4>
        <h4>Origin: <span id="origin">early 19th century: variant of earlier hollo ; related to holla.</span></h4>
      </div>
    </div>
  );
}

export default App;
