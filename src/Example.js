import React from "react";

export default function Example(props) {
  <strong>Example : </strong>;
  if (props.example) {
    return (
      <div className="Example">
        {props.examples.map(function (example, index) {
          return (
            <div>
              <span key={index}>{example}</span>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
