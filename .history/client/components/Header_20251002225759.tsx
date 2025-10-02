import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-medical-white">
      {/* Top bar */}
      <div className="bg-medical-white py-5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Emergency */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-medical-secondary rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-medical-secondary text-sm font-medium uppercase">
                    Emergency
                  </div>
                  <div className="text-medical-primary text-sm font-medium">
                    (237) 681-812-255
                  </div>
                </div>
              </div>

              {/* Work Hours */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-medical-secondary rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-medical-secondary text-sm font-medium uppercase">
                    Work Hour
                  </div>
                  <div className="text-medical-primary text-sm font-medium">
                    09:00 - 20:00 Everyday
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-medical-secondary rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-medical-secondary text-sm font-medium uppercase">
                    Location
                  </div>
                  <div className="text-medical-primary text-sm font-medium">
                    0123 Some Place
                  </div>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="font-yeseva text-3xl font-normal text-medical-primary">
              <span className="text-medical-secondary">Healt</span>
              <span className="text-medical-primary">ty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-medical-secondary">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-white text-lg font-normal border-b-2 border-medical-accent"
          : "text-white text-lg font-normal hover:text-medical-accent transition-colors"
      }
      end
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive
          ? "text-white text-lg font-normal border-b-2 border-medical-accent"
          : "text-white text-lg font-normal hover:text-medical-accent transition-colors"
      }
    >
      About us
    </NavLink>
    <NavLink
      to="/services"
      className={({ isActive }) =>
        isActive
          ? "text-white text-lg font-normal border-b-2 border-medical-accent"
          : "text-white text-lg font-normal hover:text-medical-accent transition-colors"
      }
    >
      Services
    </NavLink>
    <NavLink
      to="/doctors"
      className={({ isActive }) =>
        isActive
          ? "text-white text-lg font-normal border-b-2 border-medical-accent"
          : "text-white text-lg font-normal hover:text-medical-accent transition-colors"
      }
    >
      Doctors
    </NavLink>
    <NavLink
      to="/news"
      className={({ isActive }) =>
        isActive
          ? "text-white text-lg font-normal border-b-2 border-medical-accent"
          : "text-white text-lg font-normal hover:text-medical-accent transition-colors"
      }
    >
      News
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive
          ? "text-white text-lg font-normal border-b-2 border-medical-accent"
          : "text-white text-lg font-normal hover:text-medical-accent transition-colors"
      }
    >
      Contact
    </NavLink>
  </div>


            {/* Search and Appointment */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button className="hidden sm:flex items-center gap-2 text-white"   onClick={() => setShowSearch(true)}
                aria-label="Search">
                <Search className="w-5 h-5" />
                {/* <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg> */}
              </button>

               {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

        {/* Search Popup */}
          {showSearch && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center gap-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-medical-primary px-4 py-2 rounded w-64"
                  autoFocus
                />
                <button
                  className="bg-medical-accent text-white px-4 py-2 rounded"
                  onClick={() => setShowSearch(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

              {/* Appointment Button */}
              <button className="bg-medical-accent text-medical-primary px-8 py-3 rounded-full font-medium hover:bg-white transition-colors">
                Appointment
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-medical-secondary border-t border-medical-primary/20 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="/"
                  className="text-medical-accent text-lg font-semibold"
                >
                  Home
                </a>
                <a href="/About" className="text-white text-lg">
                  About us
                </a>
                <a href="/Services" className="text-white text-lg">
                  Services
                </a>
                <a href="/Doctors" className="text-white text-lg">
                  Doctors
                </a>
                <a href="/News" className="text-white text-lg">
                  News
                </a>
                <a href="/Contact" className="text-white text-lg">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
