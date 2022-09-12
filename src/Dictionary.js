import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function showResult(response) {
    setDefinition(response.data[0]);
  }

  function showPhotoResult(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResult);

    let photoApiKey = `563492ad6f91700001000001ee43e0b3e1ec4523a5985d5e047e5351`;
    let photoUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=16`;
    let headers = { Authorization: `Bearer ${photoApiKey}` };
    axios.get(photoUrl, { headers: headers }).then(showPhotoResult);
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
        <form onSubmit={handleSubmit} className="form">
          <div className="d-grid col-md-5 mx-auto">
            <label for="exampleFormControlInput" className="form-label">
              Make your vacabulary more colorful.
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading....";
  }
}
