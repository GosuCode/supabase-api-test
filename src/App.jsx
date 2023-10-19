import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/blog");
        setData(response.data);
        console.log("RESPONSE", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <ul>
        {data.map((val, key) => (
          <li key={key}>{val.title}
            {val.desc} <br />
            {val.author} <br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
