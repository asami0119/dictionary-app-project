import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio && props.phonetic.audio.length > 0) {
    return (
      <div>
        <div className="ms-2">{props.phonetic.text}</div>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtPlbIfGNktsqsvBrfm-9neNVY5zoNtt2Xw&usqp=CAU"
            alt="speaker-icon"
          />
        </a>
      </div>
    );
  } else {
    return <div className="ms-2">{props.phonetic.text}</div>;
  }
}
