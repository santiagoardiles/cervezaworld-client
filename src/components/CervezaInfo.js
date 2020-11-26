/* Información sobre la cerveza. */

// Setup.
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import axios from "axios";

// Styles.
import { Card, Spinner, Image } from "react-bootstrap";

// Rendering function.
function CervezaInfo(props) {
  const [cerveza, setCerveza] = useState(null);
  const cervezaId = props.match.params.cervezaId;

  // componentDidMount.
  useEffect(() => {
    axios.get(`${API_URL}/cervezas/${cervezaId}`).then((res) => {
      setCerveza(res.data);
    });
  }, []);

  // Will show a spinner as long as there is no cerveza.
  if (!cerveza) {
    return (
      <Spinner animation="border" role="status" variant="dark">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Card key={cerveza._id}>
      <Image src={cerveza.image} roundedCircle />
      <h3>{cerveza.name}</h3>
      <p>
        <b>Phrase:</b> {cerveza.phrase}
      </p>
      <p>
        <b>Description:</b> {cerveza.description}
      </p>
      <div>
        <b>Nutritional Facts:</b>
        <ul>
          <li>Energy: {cerveza.nutritionalInfo.energy}</li>
          <li>Fatt: {cerveza.nutritionalInfo.fatt}</li>
          <li>Carbohydrate: {cerveza.nutritionalInfo.carbohydrate}</li>
          <li>Protein: {cerveza.nutritionalInfo.protein}</li>
          <li>Salt: {cerveza.nutritionalInfo.salt}</li>
        </ul>
      </div>
    </Card>
  );
}

export default CervezaInfo;
