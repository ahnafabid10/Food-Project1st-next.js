import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-orange-600 tracking-tight"
          >
            Food<span className="text-gray-800">Hub</span>
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-8">
            <Link
              href="/foods"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition relative group"
            >
              Foods
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-600 transition-all group-hover:w-full"></span>
            </Link>

            <Link
              href="/reviews"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition relative group"
            >
              Reviews
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-600 transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-2 text-sm font-medium text-white hover:bg-orange-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
