import React from 'react';
import '../App.css';

function Digit({additionalClasses, map}) {
    return (
        <div className={'digit-container ' + additionalClasses}>
          {
            map.map((row, i) =>
              row.map((isActive, j) => <div key={"" + i + j} className={`${isActive ? "digit-pixel pixel-active" : "digit-pixel"}`}></div>)
            )
          }
        </div>
    );
  }

export default Digit;