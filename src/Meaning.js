import React from "react";
import "./Meaning.css";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <div>{props.meaning.definition}</div>
      <Example example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
