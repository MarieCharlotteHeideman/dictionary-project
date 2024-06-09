import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="Photos row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt="Your word"
                  className="img-fluid rounded"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
