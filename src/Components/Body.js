import React, { useEffect } from "react";
import "../Styles/Body.css"; // Import the custom CSS file
import anime from "animejs";

function Body(props) {
  useEffect(() => {
    // Wrap every letter in a span for animation
    const textWrapper = document.querySelector(".ml2");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml2 .letter",
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 850,
          delay: (el, i) => 70 * i,
        })
        .add({
          targets: ".ml2",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
  }, []);

  return (
    <div className="body-container">
      {/* New Elements Banner */}
      <div className="banner">Welcome to the Notes Portal !!!</div>

      {/* Main Heading */}
      {/* <h1 className="ml2">Get the all year NOTES SEMESTER-WISE :)</h1> */}
      <p className="subheading">
        Congratulations..... <br />
        You are studying at SGGSIE&T Nanded - 431603
      </p>

      {/* Search Bar */}
      <div className="search-container">
      <input
  type="search"
  className="search-input"
  placeholder="Search for ISE-1, ISE-2, End-Sem..."
  aria-label="Search notes"
/>

        <button className="search-button">Search</button>
      </div>

      {/* Cards Section */}
      {/* Placeholder for the Cards component */}
      <div className="cards-section">
      </div>
    </div>
  );
}

export default Body;
