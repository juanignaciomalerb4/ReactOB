import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class.js";
import ComponentB from "./componentB.jsx";

function ComponentA({ contact }) {
  return (
    <div>
      <h2>Nombre: {contact.nombre}</h2>
      <h2>Apellido: {contact.apellido}</h2>
      <h3>E-mail: {contact.email}</h3>
      <ComponentB estado={true} />
    </div>
  );
}

ComponentA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentA;
