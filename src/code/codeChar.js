import React from "react";

export function CodeChar({ id, update, resetChar }) {
  const [state, setState] = React.useState("");
  const onChange = React.useCallback(
    (e) => {
      setState(e.target.value);
      update(id, e.target.value);
    },
    [id, update]
  );

  React.useEffect(() => {
    if (resetChar) {
      setState("");
      update(id, "");
    }
  }, [state, setState, resetChar, update, id]);

  return (
    <input
      className="codeChar"
      type="text"
      maxLength={1}
      onChange={onChange}
      value={state}
    />
  );
}
