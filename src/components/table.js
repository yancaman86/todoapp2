import React, { useState } from "react";
//import Main from "./main";
import dbs from "./db.json";

function Table({ inputs }) {
  /*const deleteInput = (id) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);*/

    
  return (
    <div>
      {inputs.map((a) => {
        return (
          <div className="box" key={a.id}>
            {a.title} {a.id} {a.status}
          </div>
        );
      })}
    </div>
  );
}

export default Table;