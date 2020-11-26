/* Formulario para agregar una nueva cerveza. */

// Setup.
import React from "react";

// Styles.
import { Form, Button } from "react-bootstrap";

// Rendering function.
function NuevaCerveza(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Phrase</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
}

export default NuevaCerveza;
