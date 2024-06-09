import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = `cd6b0ad6aoad4dt98fd5242505b3e7a3`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
        <input className="submitButton" type="submit" />
      </form>
      <Results results={results} />
    </div>
  );
}
