/*    App.js    */

// Setup.
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import axios from "axios";

// Styles.
import { Spinner } from "react-bootstrap";
import "../styles/App.css";

// Rendering function.
function App() {
  const [cervezas, setCervezas] = useState([]);

  // componentDidMount.
  useEffect(() => {
    axios.get(`${API_URL}/cervezas`).then((res) => {
      setCervezas(res.data);
    });
  }, []);

  // Will show a spinner as long as there are no cervezas.
  if (!cervezas.length) {
    return (
      <Spinner animation="border" role="status" variant="dark">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="App">
      <div className="listaDeCervezas">
        {cervezas.map((cerveza) => {
          return <p key={cerveza._id}>{cerveza.name}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
