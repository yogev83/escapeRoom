import React from "react";
import { Code } from "../code/code";
import { useCode } from "../code/useCode";
import { Hint } from "./hint";

import "./lockedScreen.css";

const CODE = "238172";

export function LockedScreen({ onDone, goBack }) {
  const code = useCode(CODE, onDone);
  const [hint, setHint] = React.useState(false);
  return (
    <div className="lockedScreen">
      {hint ? (
        <Hint
          onClose={() => {
            setHint(false);
          }}
        />
      ) : (
        <div className="codeWrapper">
          <h1>Phone is Locked</h1>
          <Code size={6} {...code} />
          <p
            onClick={() => {
              setHint(true);
            }}
          >
            <a href="#">Forgot Password?</a>
          </p>
          <a className="backButton" href="#" onClick={goBack}>
            Back to Previus Screen
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      )}
    </div>
  );
}
