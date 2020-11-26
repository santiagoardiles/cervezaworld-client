/*    App.js    */

// Setup.
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { API_URL } from "../config";
import axios from "axios";

// Components.
import MyNav from "./MyNav";
import CervezaLista from "./CervezaLista";
import CervezaInfo from "./CervezaInfo";
import NuevaCerveza from "./NuevaCerveza";

// Styles.
import "../styles/App.css";

// Rendering function.
function App() {
  // Adds a new beer into the database.
  const handleAddCerveza = (e) => {
    e.preventDefault();

    const { name, phrase, description } = e.target;

    const nuevaCerveza = {
      name,
      phrase,
      description,
    };

    axios.post(`${API_URL}/cervezas/nueva`, nuevaCerveza).then(() => {
      props.history.push("/");
    });
  };

  return (
    <div className="App">
      <MyNav />

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <CervezaLista />;
          }}
        />

        <Route exact path="/information/:cervezaId" component={CervezaInfo} />

        <Route
          path="/new-cerveza"
          render={() => {
            return <NuevaCerveza onSubmit={handleAddCerveza} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
