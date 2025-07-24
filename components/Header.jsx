export default function Header() {
  return (
    <header className="bg-blue-600 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="text-xl font-bold text-white">
          MyApp
        </div>

        
        <nav className="flex space-x-8">
          <a href="#home" className="text-white hover:text-blue-200 transition">
            Home
          </a>
          <a href="#features" className="text-white hover:text-blue-200 transition">
            Features
          </a>
          <a href="#pricing" className="text-white hover:text-blue-200 transition">
            Pricing
          </a>
          <a href="#contact" className="text-white hover:text-blue-200 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}