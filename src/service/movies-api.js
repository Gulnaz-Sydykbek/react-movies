const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'b1f929257613a8009e6ee3984e7228b9';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies(page) {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${page}`,
  );
}
