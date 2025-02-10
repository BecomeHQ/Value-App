import React from "react";
import "../styles/jar.css";

function Jar() {
  return (
    <div className="jar-container">
      <div className="lid-top">
        <div className="lid-lines">
          <div className="lid-line"></div>
          <div className="lid-line"></div>
        </div>
      </div>
      <div className="lid-bottom"></div>
      <div className="jar-body">
        <div className="jar-neck"></div>
      </div>
    </div>
  );
}

export default Jar;
