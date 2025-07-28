export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 py-8 mt-auto border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="font-semibold text-lg text-white mb-3">
          Movie Company Inc.
        </div>
        <div className="mb-4 text-sm">
          Contact:{" "}
          <a
            href="mailto:info@movieco.com"
            className="text-indigo-400 hover:text-indigo-300 transition-colors underline"
          >
            info@movieco.com
          </a>{" "}
          |<span className="ml-1">123-456-7890</span>
        </div>
        <div className="text-slate-400 text-sm border-t border-slate-700 pt-4">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
