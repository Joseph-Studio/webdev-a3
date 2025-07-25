export default function MovieList({ movies, handleEdit, handleDelete }) {
  return (
    <section className="w-full">
      {movies.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎬</div>
          <p className="text-blue-600 text-lg mb-2">
            No movies in your collection yet
          </p>
          <p className="text-blue-500 text-sm">
            Add your first movie to get started!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-blue-50 rounded-xl border border-blue-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-xl text-blue-800">
                      {movie.title}
                    </h3>
                    <span className="text-blue-600 text-lg font-medium">
                      ({movie.releaseYear})
                    </span>
                  </div>
                  <div className="text-blue-700">
                    <span className="font-medium text-blue-800">Cast:</span>{" "}
                    {movie.actors.join(", ")}
                  </div>
                </div>
                <div className="flex gap-3 sm:flex-shrink-0">
                  <button
                    onClick={() => handleEdit(movie)}
                    className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
