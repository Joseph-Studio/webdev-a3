// app/page.js

'use client';

import { useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', actors: ['Leonardo DiCaprio'], releaseYear: 2010 },
    { id: 2, title: 'The Matrix', actors: ['Keanu Reeves'], releaseYear: 1999 },
  ]);

  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-4 py-3 text-center text-lg font-semibold shadow">
        🎬 Movie Database
      </nav>

      {/* Movie List */}
      <main className="flex-grow mt-6 space-y-6">
        <h2 className="text-2xl font-bold">Movie List</h2>

        <ul className="space-y-4">
          {movies.map((movie) => (
            <li key={movie.id} className="p-4 bg-white shadow rounded">
              <h3 className="text-xl font-semibold">{movie.title}</h3>
              <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
              <p><strong>Release Year:</strong> {movie.releaseYear}</p>
            </li>
          ))}
        </ul>
      </main>

      {/* Footer */}
      <footer className="bg-blue-100 text-center py-4 mt-8 text-sm text-gray-700">
        &copy; 2025 Internet Movies Rental (IMR) | Contact: info@imr.com
      </footer>
    </div>
  );
}
