import { useEffect } from "react";
import "./App.css";

function App() {
  // const [data, setData] = useState();
  useEffect(() => getData(), []);

  const getData = async () => {
    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=27f21714";
    const data = await fetch(API);
    // const json = await data.json();
    console.log(await data.json());
  };
  return <div className="App">{}</div>;
}

export default App;
