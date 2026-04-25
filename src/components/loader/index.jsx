import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const diff = Math.random() * 10;
        return Math.min(prev + diff, 100);
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 20px",
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        style={{ width: "100%", maxWidth: 400 }}
      />
    </div>
  );
};

export default Loader;
