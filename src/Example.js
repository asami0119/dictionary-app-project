import React from "react";

export default function Example(props) {
  console.log(props.example);
  if (props.example && props.example.length > 0) {
    return (
      <div>
        {props.examples.map(function (example, index) {
          return (
            <div>
              <strong>Example : </strong>
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
