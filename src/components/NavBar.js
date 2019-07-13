import React from "react";
const styles = {
  navStyle: {
    background: "#37444b",
    height: "150px",
    width: "100%"
  }
};

const Navbar = ({ score, highestScore, toggleTheme, theme }) => {
  return (
    <nav style={styles.navStyle}>
      <div className="nav-wrapper">
        <p className="scores">Your Score: {score} </p>
        <p className="space-around highScores">High Score: {highestScore} </p>

        <h1>
          <a href="/" className="brand-logo center">
            Clicker Game
          </a>
        </h1>
      </div>
      <button className="btn-clear" onClick={toggleTheme}>
        {theme === "light" ? "🔦" : "💡"}
      </button>
    </nav>
  );
};

export default Navbar;
