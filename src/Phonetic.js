import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div>
      <div className="ms-2">{props.phonetic.text}</div>
      <a href={props.phonetic.audio} target="_blank">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtPlbIfGNktsqsvBrfm-9neNVY5zoNtt2Xw&usqp=CAU" />
      </a>
    </div>
  );
}
