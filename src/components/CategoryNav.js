import React from "react";
import { Link } from "react-router-dom";

export const CategoryNav = () => {
  return (
    <nav>

      
      <ul className="navbar">
      <h2>Choose a category</h2>
      
        <Link className="navbar__item" to="/category/?name=videogames&ctgry=15">
          Videogames
        </Link>

        <Link
          className="navbar__item"
          to="/category/?name=computer science&ctgry=18"
        >
          Computer science
        </Link>

        <Link className="navbar__item" to="/category/?name=anime&ctgry=31">
          Anime
        </Link>

        <Link className="navbar__item" to="/category/?name=music&ctgry=12">
          Music
        </Link>
      </ul>
    </nav>
  );
};
