export default function MovieForm({
  form,
  editId,
  handleSubmit,
  handleCancel,
  setForm,
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        {editId ? "Edit Movie" : "Add New Movie"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Movie Title
          </label>
          <input
            className="w-full border border-blue-300 rounded-lg px-4 py-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter movie title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Cast Members
          </label>
          <input
            className="w-full border border-blue-300 rounded-lg px-4 py-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter actors (comma separated)"
            value={form.actors}
            onChange={(e) => setForm({ ...form, actors: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Release Year
          </label>
          <input
            className="w-full border border-blue-300 rounded-lg px-4 py-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter release year"
            type="number"
            value={form.releaseYear}
            onChange={(e) => setForm({ ...form, releaseYear: e.target.value })}
            required
            min={1888}
            max={2100}
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {editId ? "Update Movie" : "Add Movie"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-3 border border-blue-300 text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
