import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "9999px"
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 20,
          color: "black",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        🛺Loading..{progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
