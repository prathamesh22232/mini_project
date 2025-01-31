import React, { useState } from "react";
import "../Styles/Card.css";

function Card(props) {
  const [showSubCards, setShowSubCards] = useState(false);

  // Handler to toggle visibility of sub-cards
  const handleDownloadClick = () => {
    setShowSubCards(!showSubCards);
  };

  return (
    <div className="card-container">
      {/* Main Card */}
      <div className="card">
        <img className="card-img-top" src={props.student} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{props.academic}</h5>
          <p className="card-text">{props.para}</p>
          <button className="btn btn-primary" onClick={handleDownloadClick}>
            {showSubCards ? "Hide Notes" : "Download Notes Here"}
          </button>
        </div>
      </div>

      {/* Sub-Cards */}
      {showSubCards && (
        <div className="sub-cards">
          <div className="card sub-card">
            <h5 className="card-title">ISE 1</h5>
            <p className="card-text">Notes for Internal Semester Exam 1.</p>
            <button className="btn btn-secondary">Download ISE 1</button>
          </div>
          <div className="card sub-card">
            <h5 className="card-title">ISE 2</h5>
            <p className="card-text">Notes for Internal Semester Exam 2.</p>
            <button className="btn btn-secondary">Download ISE 2</button>
          </div>
          <div className="card sub-card">
            <h5 className="card-title">End-Sem</h5>
            <p className="card-text">Notes for End-Semester Exam.</p>
            <button className="btn btn-secondary">Download End-Sem</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
