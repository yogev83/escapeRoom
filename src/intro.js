import React from "react";

export function Intro({ onClick }) {
  return (
    <div className="intro">
      <button onClick={onClick}>TURN ON</button>
    </div>
  );
}
