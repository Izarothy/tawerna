import React from "react";
import Pytanie from "./Pytanie";
import Search from "./Search";
function Obramowka() {
  let template =
    "Testowy tekst Testowy tekst Testowy tekst tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst Testowy tekst ";
  return (
    <div className="obramowka">
      <div>
        {/* <Search /> */}
        <Pytanie
          id="1"
          tekst="W której miejscowości Śródziemia jest karczma Pod Rozbrykanym Kucykiem?"
          odpowiedz="Bree"
        />
        <Pytanie
          id="2"
          tekst="Kim okazał się być Łazik/Obieżyświat?"
          odpowiedz="Aragornem"
        />
        <Pytanie
          id="3"
          tekst="Kogo z kompani Thorina w Rivendell spotkał Frodo?"
          odpowiedz="Gloina"
        />
        <Pytanie
          id="4"
          tekst="Ilu członków liczyła drużyna pierścienia?"
          odpowiedz="Dziewięciu"
        />
        <Pytanie id="5" tekst="Kto napisał Księgę Mazarbul?" odpowiedz="Ori" />
        <Pytanie
          id="6"
          tekst="Kto pomógł hobbitom po tym jak napadło ich drzewo?"
          odpowiedz="Tom Bombadil"
        />
        <Pytanie
          id="7"
          tekst="Kim jest Tom Bombadil?"
          odpowiedz="Nie wiadomo"
        />
        <Pytanie
          id="8"
          tekst="Z Kim walczył Gandalf na szczycie góry?"
          odpowiedz="Z Balrogiem"
        />
      </div>
    </div>
  );
}

export default Obramowka;
