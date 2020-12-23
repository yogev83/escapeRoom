import React from "react";
import "./close.css";

export function Close({ onClose }) {
  return (
    <div id="mdiv" onClick={onClose}>
      <div className="mdiv">
        <div className="md"></div>
      </div>
    </div>
  );
}
