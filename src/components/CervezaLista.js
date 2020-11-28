/*    Lista de cervezas.    */

// Setup.
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import axios from "axios";

// Styles.
import { Card, Spinner, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function CervezaLista() {
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
    <div className="listaDeCervezas">
      {cervezas.map((cerveza) => {
        return (
          <Card key={cerveza._id}>
            <Image
              src={cerveza.image}
              style={{ width: "18rem" }}
              roundedCircle
            />
            <Link to={`/information/${cerveza._id}`}>
              <h5>{cerveza.name}</h5>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}

export default CervezaLista;
