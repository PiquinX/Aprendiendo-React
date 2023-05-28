import React from "https://esm.sh/react@18.2.0";
import ReactDom from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDom.createRoot(appDomElement);
const button = ReactDom.createElement("button", {"type": "submit", "data-id": 123},"me gusta");

root.render(button);