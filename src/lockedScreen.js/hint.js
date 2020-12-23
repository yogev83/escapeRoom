import React from "react";
import { Close } from "../close/close";

export function Hint({ onClose }) {
  return (
    <>
      <Close onClose={onClose} />
      <div className="hintImageWrapper">
        <img src="hint.png" />
      </div>
    </>
  );
}
