import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.audio.length > 0) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          {props.phonetic.text}
        </a>
      </div>
    );
  } else {
    return null;
  }
}
