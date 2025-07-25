"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import MovieForm from "./components/MovieForm";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({ title: "", actors: "", releaseYear: "" });
  const [editId, setEditId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  const openAddModal = () => {
    setEditId(null);
    setForm({ title: "", actors: "", releaseYear: "" });
    setModalOpen(true);
  };

  const openEditModal = (movie) => {
    setEditId(movie.id);
    setForm({
      title: movie.title,
      actors: movie.actors.join(", "),
      releaseYear: movie.releaseYear,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movieData = {
      ...form,
      actors: form.actors.split(",").map((a) => a.trim()),
      releaseYear: Number(form.releaseYear),
    };

    if (editId) {
      const res = await fetch("/api/movies", {
        method: "PUT",
        body: JSON.stringify({ id: editId, ...movieData }),
        headers: { "Content-Type": "application/json" },
      });
      const updatedMovie = await res.json();
      setMovies(movies.map((m) => (m.id === editId ? updatedMovie : m)));
    } else {
      const res = await fetch("/api/movies", {
        method: "POST",
        body: JSON.stringify(movieData),
        headers: { "Content-Type": "application/json" },
      });
      const newMovie = await res.json();
      setMovies([...movies, newMovie]);
    }

    setModalOpen(false);
    setForm({ title: "", actors: "", releaseYear: "" });
    setEditId(null);
  };

  const handleDelete = async (id) => {
    await fetch("/api/movies", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    setMovies(movies.filter((m) => m.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">
              Movie Collection
            </h1>
            <p className="text-blue-600">Manage your favorite movies</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-blue-200 overflow-hidden">
            <div className="p-6 border-b border-blue-200 bg-blue-50">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-blue-800">
                  My Movie Library
                </h2>
                <button
                  onClick={openAddModal}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  <span className="text-lg mr-2">+</span>Add Movie
                </button>
              </div>
            </div>

            <div className="p-6">
              <MovieList
                movies={movies}
                handleEdit={openEditModal}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>

        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-md border border-slate-200">
            <MovieForm
              form={form}
              editId={editId}
              handleSubmit={handleSubmit}
              handleCancel={() => setModalOpen(false)}
              setForm={setForm}
            />
          </div>
        </Modal>
      </main>
      <Footer />
    </div>
  );
}
