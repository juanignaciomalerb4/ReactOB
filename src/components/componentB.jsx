import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class.js";

function ComponentB(estado) {
  const [conected, setConected] = useState(estado);
  return (
    <div>
      <h3>{conected === false ? "Usuario no disponible" : "Usuario online"}</h3>
      <button onClick={() => setConected(!conected)}>
        {conected === false ? "Conected" : "Disconnected"}
      </button>
    </div>
  );
}

ComponentB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponentB;
