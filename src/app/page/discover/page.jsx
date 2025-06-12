// app/page/discover/page.jsx
import baseUrl from "../constants/baseUrl";
import LatestMoviesClient from "./LatestMoviesClient";

async function getLatestMovies(page = 1) {
  const res = await fetch(`${baseUrl}/api/latest-movies?page=${page}`, {
    cache: "no-store", // disables static caching
  });
  if (!res.ok) throw new Error("Failed to fetch movies");
  const data = await res.json();
  return data.results;
}

export default async function LatestMoviesPage() {
  const movies = await getLatestMovies(1); // Initial page fetch
  return <LatestMoviesClient initialMovies={movies} />;
}
