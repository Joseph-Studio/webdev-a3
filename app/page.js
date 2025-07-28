"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [actors, setActors] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  // ✅ Fetch all movies
  const fetchMovies = async () => {
    const res = await fetch("/api/movies");
    const data = await res.json();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // ✅ Add new movie
  const addMovie = async (e) => {
    e.preventDefault();
    await fetch("/api/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        actors: actors.split(",").map((a) => a.trim()),
        releaseYear,
      }),
    });
    setTitle("");
    setActors("");
    setReleaseYear("");
    fetchMovies(); // refresh
  };

  // ✅ Delete movie
  const deleteMovie = async (id) => {
    await fetch("/api/movies", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchMovies();
  };

  return (
    <div className="container mx-auto px-4">
      <Header />

      <h1 className="text-2xl font-bold mt-6">🎬 Movies List</h1>

      {/* ✅ Add Movie Form */}
      <form onSubmit={addMovie} className="mb-6 space-y-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Movie Title"
          required
          className="border p-2 block w-full"
        />
        <input
          value={actors}
          onChange={(e) => setActors(e.target.value)}
          placeholder="Actors (comma separated)"
          required
          className="border p-2 block w-full"
        />
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="Release Year"
          required
          className="border p-2 block w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Movie
        </button>
      </form>

      {/* ✅ Movie List */}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="flex justify-between items-center border-b py-2">
            <div>
              {movie.title} ({movie.releaseYear}) – Actors: {movie.actors.join(", ")}
            </div>
            <button
              onClick={() => deleteMovie(movie.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}

