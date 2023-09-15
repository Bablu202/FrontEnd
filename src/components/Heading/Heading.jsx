import React from "react";
import "./heading.css";
export default function Heading({ title, detail, more }) {
  return (
    <div className="app__heading">
      <h1 className="app__header-h1">{title}</h1>
      <p className="p__cormorant">{detail}</p>
      <button className="custom__button">{more}</button>
    </div>
  );
}
