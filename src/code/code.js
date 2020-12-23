import React from "react";
import "./code.css";
import { CodeChar } from "./codeChar";

export function Code({ size, checkCode, onReset, resetCode }) {
  const [state, setState] = React.useState([]);

  const onUpdate = React.useCallback(
    (i, val) => {
      const newState = state.concat([]);
      newState[i] = val;
      setState(newState);

      const next = document.getElementsByClassName("codeChar")[i + 1];
      if (next) {
        next.focus();
      }
    },
    [state]
  );

  const codeChars = React.useMemo(() => {
    const inputs = [];
    for (let i = 0; i < size; i++) {
      inputs.push(
        <CodeChar key={i} id={i} update={onUpdate} resetChar={resetCode} />
      );
    }

    if (resetCode) {
      document.getElementsByClassName("codeChar")[0].focus();
      onReset();
    }
    return inputs;
  }, [onReset, onUpdate, resetCode, size]);

  React.useEffect(() => {
    let ready = true;
    for (let i = 0; i < size; i++) {
      ready = ready && !!state[i];
    }
    if (ready) {
      checkCode(state.join(""));
    }
  }, [checkCode, size, state]);

  return <div>{codeChars}</div>;
}
