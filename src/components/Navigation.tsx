import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Menu, X } from 'lucide-react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black/50 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Gamepad2 className="w-8 h-8 text-[#00ff95]" />
          <span className="text-2xl font-bold">EpicQuest</span>
        </Link>
        
        <button 
          className="lg:hidden text-white hover:text-[#00ff95]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden lg:flex gap-8 items-center">
          <Link 
            to="/features" 
            className={`hover:text-[#00ff95] transition-colors ${isActive('/features') ? 'text-[#00ff95]' : ''}`}
          >
            Features
          </Link>
          <Link 
            to="/roadmap" 
            className={`hover:text-[#00ff95] transition-colors ${isActive('/roadmap') ? 'text-[#00ff95]' : ''}`}
          >
            Roadmap
          </Link>
          <Link 
            to="/team" 
            className={`hover:text-[#00ff95] transition-colors ${isActive('/team') ? 'text-[#00ff95]' : ''}`}
          >
            Team
          </Link>
          <Link 
            to="/download" 
            className="bg-[#00ff95] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#00cc78] transition-colors"
          >
            Play Now
          </Link>
        </div>
      </div>

      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black/95 backdrop-blur-sm`}>
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <Link 
            to="/features" 
            className={`hover:text-[#00ff95] transition-colors py-2 ${isActive('/features') ? 'text-[#00ff95]' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/roadmap" 
            className={`hover:text-[#00ff95] transition-colors py-2 ${isActive('/roadmap') ? 'text-[#00ff95]' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Roadmap
          </Link>
          <Link 
            to="/team" 
            className={`hover:text-[#00ff95] transition-colors py-2 ${isActive('/team') ? 'text-[#00ff95]' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </Link>
          <Link 
            to="/download" 
            className="bg-[#00ff95] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#00cc78] transition-colors w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Play Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation