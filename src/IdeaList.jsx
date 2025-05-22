import React, { useState } from "react";
import "./IdeaList.css";

function IdeaList() {
  const [selected, setSelected] = useState(null);

  const ideas = [
    {
      text: "LAKI - LAKI",
      color: "#000080", 
    },
    {
      text: "PEREMPUAN",
      color: 	"#87CEFA", 
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Pilih Jenis Kelamin</h1>
      <div className="card-wrapper">
        {ideas.map((idea, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`card ${selected === index ? "selected" : ""}`}
            style={{
              backgroundColor: idea.color,
              color: selected === index ? "black" : "white",
            }}
          >
            {idea.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default IdeaList;
