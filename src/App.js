import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Recommendation from "./components/Recommendation";
import ClearInput from "./components/ClearInput";
import Title from "./components/Title";
//https://api.dictionaryapi.dev/api/v2/entries/en/<word>


function App() {
  const [url, setUrl] = useState(
    "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
  );
  const handelKeyDown = (event) => {
    if(event.key === 'Enter'){
      let url = "https://api.dictionaryapi.dev/api/v2/entries/en/".concat(document.getElementById("word").value);
      setUrl(url);
    }
  };
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
    });
  }, [url]);
  return (
    <div className="App">
      <div className="box">
        <Title title="React Dictionary" />
        <form>
          <input id="word" onKeyDown={handelKeyDown} />
          <button onClick={ClearInput} type="button">
            <i className="fa fa-close"></i>
          </button>
        </form>
        <Recommendation recommendation1="Argentina" recommendation2="Assault" />
      </div>
    </div>
  );
}

export default App;
