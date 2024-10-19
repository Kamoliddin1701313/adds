import React from "react";
import { useParams } from "react-router-dom";

const Contacts = () => {
  const param = useParams();
  return (
    <div>
      Contacts
      <h1>Param : {param.id}</h1>
    </div>
  );
};

export default Contacts;
