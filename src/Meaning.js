import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms.js";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section>
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition : </strong>
                {definition.definition}
                <br />
                <div>
                  <Example example={definition.example} />
                </div>
                <br />
                <div>
                  <Synonyms synonyms={definition.synonyms} />
                </div>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
