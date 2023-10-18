import React from "react";

export const Book = ({ location, setLocation, handleClick, result }: any) => {
  return (
    <>
      <div className="page">
        <div className="head_1">
          <h1>Elige tu historia</h1>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Choose your story"
            className="rounded border p-2 mr-2 text-black"
          />
          <button
            className="rounded border border-black dark:border-white p-2"
            style={{ background: "lightgray", margin: "10px" }}
            onClick={handleClick}
          >
            Comenzar
          </button>
          {/* <img src="/imgs/portait2.png" alt="virginiawoolf" id="virginia"> */}
        </div>
        {/* <div className="head_2">
          <h3>Using Llm IA</h3>
        </div> */}
        <div className="main">
          <p>{result}</p>
        </div>
      </div>
      {/* <svg>
        <filter id="wavy2">
          <feTurbulence
            x={0}
            y={0}
            baseFrequency="0.001"
            numOctaves={5}
            seed={1}
          />
          <feDisplacementMap in="SourceGraphic" scale={20} />
        </filter>
      </svg> */}
    </>
  );
};
