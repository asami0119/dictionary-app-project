import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showResult(response) {
    setDefinition(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResult);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
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
              defaultValue={props.defaultKeyword}
            />
          </div>
        </form>
        <Definition definition={definition} />
      </div>
    );
  } else {
    load();
    return "Loading....";
  }
}
