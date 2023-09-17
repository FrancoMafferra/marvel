import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

function Landing() {
  return (
    <div>
      <h1>MARVEL COMICS!</h1>
      <Link to="/comics">
        <button className="btn btn-primary">Ver cómics</button>{" "}
      </Link>
    </div>
  );
}

export default Landing;
