import React from 'react';
import '../App.css';

function Digit({isFirst, map}) {
    return (
        <div className={isFirst ? "one-col-container" : "digit-container"}>
          {
            map.map((row, i) =>
              row.map((isActive, j) => <div key={"" + i + j} className={`${isActive ? "digit-pixel pixel-active" : "digit-pixel"}`}></div>)
            )
          }
        </div>
    );
  }

export default Digit;