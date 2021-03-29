import React, { useState } from "react";
import Collapsible from "react-collapsible";

function Pytanie(props) {
  return (
    <div className="pytanie">
      <Collapsible
        trigger={
          <p className="tytul">
            {props.id}. {props.tekst}
          </p>
        }
      >
        <p className="content">
          <div id="odpowiedz">{props.odpowiedz}</div>
        </p>
      </Collapsible>
    </div>
  );
}

export default Pytanie;
