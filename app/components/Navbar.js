export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-slate-200 py-8 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center space-x-3">
          <span className="text-2xl">🎬</span>
          <h1 className="text-xl font-bold text-white tracking-tight">
            Movie Database
          </h1>
        </div>
      </div>
    </nav>
  );
}
