import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
  }
  function handleChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="d-grid col-md-5 mx-auto">
          <label for="exampleFormControlInput" className="form-label">
            Search a word
          </label>
          <input
            type="search"
            className="form-control"
            placeholder="🔍"
            autoFocus="on"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
