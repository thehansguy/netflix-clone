const APIKEY = "91c101c377a755e119ba04b5b5d3441f";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_networks=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_networks=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_networks=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_networks=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_networks=99`,
};

export default requests;
