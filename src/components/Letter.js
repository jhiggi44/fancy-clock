import React from 'react';
import '../App.css';

function Letter({map}) {
    return (
        <div className="letter-container">
          {
            map.map((row, i) =>
              row.map((isActive, j) => <div key={"" + i + j} className={`${isActive ? "digit-pixel pixel-active" : "digit-pixel"}`}></div>)
            )
          }
        </div>
    );
  }

export default Letter;