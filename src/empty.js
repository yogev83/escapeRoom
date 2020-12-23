import React from "react";
import { Code } from "./code/code";
import { useCode } from "./code/useCode";

const CODE = "251";

export function Empty({ onDone }) {
  const [state, setState] = React.useState("Enter Charger Number");
  const onWrong = React.useCallback(() => {
    setState("Wrong Charger Number");
  }, [setState]);
  const code = useCode(CODE, onDone, onWrong);

  return (
    <div className="empty">
      <img src="./battery.png" />
      <Code size={3} {...code} />
      <p
        className={`emptyMsg${
          state === "Enter Charger Number" ? "" : " wrong"
        }`}
      >
        {state}
      </p>
    </div>
  );
}
