import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition : </strong>
              {definition.definition}
              <br />
              <strong>Example : </strong>
              {definition.example}
              <Example example={definition.example} />
              <br />
              <div>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </p>
          </div>
        );
      })}
    </div>
  );
}
