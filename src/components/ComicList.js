import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from "crypto-js/md5";

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
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <h1>Comic List</h1>
      {comics.map((comic) => (
        <div key={comic.id}>
          <h2>{comic.title}</h2>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
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
