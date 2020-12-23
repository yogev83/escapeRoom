import React from "react";

export const useCode = (correctCode, onDone, onWrong) => {
  const [resetCode, setResetCode] = React.useState(false);
  const checkCode = (code) => {
    if (code === correctCode) {
      onDone();
    } else {
      setResetCode(true);
    }
  };

  const onReset = React.useCallback(() => {
    setResetCode(false);
    if (typeof onWrong === "function") {
      onWrong();
    }
  }, [setResetCode, onWrong]);

  return { checkCode, onReset, resetCode };
};
