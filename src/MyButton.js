import React, { useState, useEffect } from "react";

const MyButton = ({ buttonText }) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setDisplayText("World");
    }, 2000);
  }, []);

  return (
    <>
      <button style={{ width: "100px" }}>
        {" "}
        {buttonText} <br /> {displayText}{" "}
      </button>
    </>
  );
};

export default MyButton;
