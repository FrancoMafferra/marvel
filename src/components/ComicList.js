import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from "crypto-js/md5";
import { Link } from "react-router-dom";
import ComicSearch from "./ComicSearch";

const publicKey = "c352f162878d0cc68c68e12e57d22ac0";
const privateKey = "9a850fe5e1d3911eb1c1cd3f4064d3216546c3fe";
const comicsPerPage = 5;

function ComicList() {
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const ts = Date.now().toString();
    const hash = md5(ts + privateKey + publicKey).toString();

    const getComics = async () => {
      const offset = (currentPage - 1) * comicsPerPage;
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${comicsPerPage}&offset=${offset}`
      );
      const comicsData = response.data.data.results;
      setComics(comicsData);

      // Desplazar la página hacia arriba
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    getComics();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h1>Comic List</h1>
        <ComicSearch/>
      {comics.map((comic) => (
        <div key={comic.id}>
          <h2>{comic.title}</h2>
          <Link to={`/comics/${comic.id}`}>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
          </Link>
          <p>{comic.description}</p>
        </div>
      ))}
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default ComicList;








/* CON REDUX
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchComic } from "../redux/actions/comicActions";

function ComicList() {
const comics = useSelector((state) => state.comic.comic); // Cambia de state.comic.comics a state.comic.comic
const currentPage = useSelector((state) => state.comic.currentPage);
const loading = useSelector((state) => state.comic.loading);
const dispatch = useDispatch();

useEffect(() => {
dispatch(fetchComic(currentPage));
}, [currentPage, dispatch]);

const nextPage = () => {
dispatch({
type: "NEXT_PAGE",
});
};

const prevPage = () => {
dispatch({
type: "PREV_PAGE",
});
};

if (loading) {
return <div>Loading...</div>;
}

return (
<div>
<h1>Comic List</h1>
{comics.map((comic) => (
<div key={comic.id}>
<h2>{comic.title}</h2>
<Link to={`/comics/${comic.id}`}>
<img
src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
alt={comic.title}
/>
</Link>
<p>{comic.description}</p>
</div>
))}
<div>
<button onClick={prevPage} disabled={currentPage === 1}>
Previous Page
</button>
<span>Page {currentPage}</span>
<button onClick={nextPage}>Next Page</button>
</div>
</div>
);
}

export default ComicList;*/
