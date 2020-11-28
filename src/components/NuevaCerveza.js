/* Formulario para agregar una nueva cerveza. */

// Setup.
import React from "react";

function NuevaCerveza(props) {
  return (
    <div className="nuevaCerveza">
      <form onSubmit={props.onSubmit}>
        <label>Name</label>
        <input value={name} name="name" onChange={this.handleInput} />
        <br />
        <label>Tagline</label>
        <input value={tagline} name="tagline" onChange={this.handleInput} />
        <br />
        <label>Description</label>
        <input
          value={description}
          name="description"
          onChange={this.handleInput}
        />
        <br />
        <label>First Brewed</label>
        <input
          value={firstBrewed}
          name="firstBrewed"
          onChange={this.handleInput}
        />
        <br />
        <label>Brewer Tips</label>
        <input
          value={brewersTips}
          name="brewersTips"
          onChange={this.handleInput}
        />
        <br />
        <label>Attenuation Level</label>
        <input
          type="number"
          value={attenuationLevel}
          name="attenuationLevel"
          onChange={this.handleInput}
        />
        <br />
        <label>Contributed By</label>
        <input
          value={contributedBy}
          name="contributedBy"
          onChange={this.handleInput}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NuevaCerveza;
