import React from "react";

export default function Example(props) {
  if (props.example && props.example.length > 0) {
    return (
      <div className="Example">
        {props.examples.map(function (example, index) {
          return (
            <ul key={index}>
              <li>{example}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
