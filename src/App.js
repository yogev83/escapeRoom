import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Empty } from "./empty";
import { Order } from "./order";
import { Lock } from "./lock";
import { LockedScreen } from "./lockedScreen.js/lockedScreen";
import { Intro } from "./intro";
import { Clock } from "./clock/clock";
import { Clip } from "./clip";

function App() {
  const [state, setState] = React.useState("intro");
  const [locked, setLocked] = React.useState(false);
  const [startClock, setStartClock] = React.useState(false);

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
  }, [setLocked]);

  const start = React.useCallback(() => {
    document.documentElement.requestFullscreen();
    setStartClock(true);
    setState("empty");
  }, [setState]);

  const showVideo = React.useCallback(() => {
    setState("clip");
    setLocked(false);
    setTimeout(() => {
      const vid = document.getElementById("myVideo");
      vid.play();
      vid.requestFullscreen();
    }, 1000);
  }, [setState]);

  const content = React.useMemo(() => {
    switch (state) {
      case "intro":
        return <Intro onClick={start} />;
      case "empty":
        return <Empty onDone={turnOn} />;
      case "order":
        return <Order onDone={showLock} onClose={exit} />;
      case "lock":
        return <Lock onClose={exit} />;
      case "clip":
        return <Clip />;
      default:
        return null;
    }
  }, [state, turnOn, showLock, exit, start]);

  return (
    <div className="App">
      {locked ? <LockedScreen onDone={showVideo} goBack={onBack} /> : content}
      {startClock ? <Clock /> : null}
    </div>
  );
}

export default App;
