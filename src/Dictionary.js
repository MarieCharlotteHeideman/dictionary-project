import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "cd6b0ad6aoad4dt98fd5242505b3e7a3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = `RL4YiIz9CDenhpczD72QLiMPUyrpZCBEbl4E7OiMCWNXgOsk7BhLF5wH`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="searchForm"
          type="search"
          autoFocus={true}
          placeholder="What word do you want to look up?"
          onChange={handleKeywordChange}
        />
        <input className="submitButton" type="submit" value="Search" />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
