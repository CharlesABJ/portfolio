"use client";
import React, { useState, useEffect } from "react";

function jeux(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {}, [counter]);

  const handleClickAdd = () => {
    setCounter(counter + 1);
  };
  const handleClickSous = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <p>
        {counter > 0
          ? `Youhouuuu j'ai ${counter} € sur mon compte bancaire `
          : `Nonnnnn j'ai ${counter}  sur mon compte bancaire`}{" "}
      </p>
      <button onClick={() => handleClickAdd()}>Ajouter 1</button>
      <button onClick={() => handleClickSous()}>Retirer 1</button>
    </>
  );
}

export default jeux;
