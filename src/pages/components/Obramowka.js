import React from "react";
import Pytanie from "./Pytanie";
import Search from "./Search";
function Obramowka() {
  let template =
    "Testowy tekst Testowy tekst Testowy tekst tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst ";
  return (
    <div className="obramowka">
      <div>
        <Search />
        <Pytanie
          id="1"
          tekst="W której miejscowości Śródziemia jest karczma Pod Rozbrykanym Kucykiem?"
          odpowiedz="Bree"
        />
        <Pytanie id="2" tekst={template} />
        <Pytanie id="3" tekst={template} />
        <Pytanie id="4" tekst={template} />
        <Pytanie id="5" tekst={template} />
        <Pytanie id="6" tekst={template} />
      </div>
    </div>
  );
}

export default Obramowka;
