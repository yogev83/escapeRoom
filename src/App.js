import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Empty } from "./empty";
import { Order } from "./order";
import { Lock } from "./lock";
import { LockedScreen } from "./lockedScreen.js/lockedScreen";

function App() {
  const [state, setState] = React.useState("empty");
  const [locked, setLocked] = React.useState(false);

  const turnOn = React.useCallback(() => {
    setState("order");
  }, [setState]);

  const showLock = React.useCallback(() => {
    setState("lock");
  }, [setState]);

  const exit = React.useCallback(() => {
    setLocked(true);
  }, [setLocked]);

  const onBack = React.useCallback(() => {
    setLocked(false);
  }, []);

  const content = React.useMemo(() => {
    switch (state) {
      case "empty":
        return <Empty onDone={turnOn} />;
      case "order":
        return <Order onDone={showLock} onClose={exit} />;
      case "lock":
        return <Lock onClose={exit} />;
      default:
        return null;
    }
  }, [state, turnOn, showLock, exit]);

  return (
    <div className="App">
      {locked ? <LockedScreen onDone={() => {}} goBack={onBack} /> : content}
    </div>
  );
}

export default App;
