import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function showResult(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(showResult);
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
