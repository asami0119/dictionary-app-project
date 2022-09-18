import React from "react";

import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-3" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    className="pictures img-fluid img-thumbnail rounded text-center"
                    src={photo.src.small}
                    alt="pictures related to the search"
                    style={{ width: "70%", height: "70%" }}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
