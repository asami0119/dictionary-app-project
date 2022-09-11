import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Definition.css";

export default function Definition(props) {
  console.log(props.definition);
  if (props.definition) {
    return (
      <div className="definition">
        <section>
          <h1 className="word">{props.definition.word}</h1>
          {props.definition.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <br />
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
