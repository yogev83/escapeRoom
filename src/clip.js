import React from "react";

export function Clip() {
  console.warn(window.screen.width, window.screen.height);
  return (
    <video
      id="myVideo"
      width={window.screen.width}
      height={window.screen.height}
    >
      <source src="./clip.mp4" type="video/mp4"></source>
    </video>
  );
}
