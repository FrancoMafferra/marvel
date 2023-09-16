import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from "crypto-js/md5";
import { useParams, Link } from "react-router-dom";

const publicKey = "c352f162878d0cc68c68e12e57d22ac0";
const privateKey = "9a850fe5e1d3911eb1c1cd3f4064d3216546c3fe";

function ComicDetail() {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);

  useEffect(() => {
    const ts = Date.now().toString();
    const hash = md5(ts + privateKey + publicKey).toString();

    const getComic = async () => {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/comics/${comicId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );
      const comicData = response.data.data.results[0];
      setComic(comicData);
    };

    getComic();
  }, [comicId]);

  if (!comic) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/comics">Volver atrás</Link>
      <h1>{comic.title}</h1>
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <p>{comic.description}</p>
      <h2>Characters:</h2>
      <ul>
        {comic.characters.items.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ComicDetail;
