import axios from "axios";
import md5 from "crypto-js/md5";

const publicKey = "c352f162878d0cc68c68e12e57d22ac0";
const privateKey = "9a850fe5e1d3911eb1c1cd3f4064d3216546c3fe";

export const fetchComic = (comicId) => {
return async (dispatch) => {
try {
const ts = Date.now().toString();
const hash = md5(ts + privateKey + publicKey).toString();

const response = await axios.get(
`https://gateway.marvel.com/v1/public/comics/${comicId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
);
const comicData = response.data.data.results[0];

dispatch({
type: "FETCH_COMIC_SUCCESS",
payload: comicData,
});
} catch (error) {
dispatch({
type: "FETCH_COMIC_FAILURE",
payload: error.message,
});
}
};
};