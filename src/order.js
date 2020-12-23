import React from "react";
import { Close } from "./close/close";
import { Code } from "./code/code";
import { useCode } from "./code/useCode";

const CODE = "5133";

export function Order({ onDone, onClose }) {
  const [wrong, setWrong] = React.useState(false);
  const onWrong = React.useCallback(() => {
    setWrong(true);
  }, [setWrong]);
  const code = useCode(CODE, onDone, onWrong);

  return (
    <>
      <Close onClose={onClose} />
      <div className="order">
        <img src="./amazon.png" />
        <div className="orderCodeWrapper">
          Order Number:
          <Code size={4} {...code} />
          {wrong ? <p className="orderMsg">Order not found</p> : null}
        </div>
      </div>
    </>
  );
}
