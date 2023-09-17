import React, { useState } from "react";
import axios from "axios";
import md5 from "crypto-js/md5";
import { Link } from "react-router-dom";

const publicKey = "c352f162878d0cc68c68e12e57d22ac0";
const privateKey = "9a850fe5e1d3911eb1c1cd3f4064d3216546c3fe";
const comicsPerPage = 5;

function ComicSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    const ts = Date.now().toString();
    const hash = md5(ts + privateKey + publicKey).toString();

    setSearchTerm(event.target.value);

    if (event.target.value.length > 2) {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${event.target.value}`
      );
      const comicsData = response.data.data.results;
      setSearchResults(comicsData);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search comics..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((comic) => (
            <li key={comic.id}>
              <Link to={`/comics/${comic.id}`}>{comic.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ComicSearch;






/* CON REDUX

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchComics } from "../redux/actions/comicActions";
import "./ComicSearch.css"

function ComicSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useSelector((state) => state.comic.searchResults);
  const dispatch = useDispatch();

  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value.length > 2) {
      dispatch(searchComics(event.target.value));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search comics..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((comic) => (
            <li key={comic.id}>
              <Link to={`/comics/${comic.id}`}>{comic.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ComicSearch;*/
