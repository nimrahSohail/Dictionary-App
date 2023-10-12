import React from "react";
import "./Definition.css";

function Definitions({ word, category, meanings, lightmode }) {
  return (
    <div className="meanings">
      {/* {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          controls
        >
          Your browser doesn't support audio element.
        </audio>
      )} */}

      {word === "" ? (
        <span className="sub-title">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="single-meaning"
                style={{ backgroundColor:lightmode? "#3b5360": "white", color:lightmode? 'white': "black" }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b> Example: </b>
                    {def.example}
                  </span>
                )}
                {/* 
                {def.synonyms && (
                  <span>
                    <b> Synonyms: </b>
                    {def.synonyms.map((s)=> `${s},`)}
                  </span>
                )} */}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}

export default Definitions;
