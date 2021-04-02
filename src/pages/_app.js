import React from "react";

// komponenty React
import Obramowka from "./components/Obramowka";
import App from "./components/App";
// css
import "./styles/Obramowka.css";
import "./styles/Pytanie.css";
import "./styles/Appc.css";
import "./index.css";

const Strona = () => {
  return (
    <div>
      <iframe
        media="screen and (max-device-width: 799px)"
        id="dsc"
        src="https://discord.com/widget?id=484645229371064332&theme=dark"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
      <App />
      <Obramowka />
    </div>
  );
};

export default Strona;
