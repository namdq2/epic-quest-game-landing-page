import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Github, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-[#00ff95]" />
            <span className="text-xl font-bold">EpicQuest</span>
          </Link>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#00ff95] transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#00ff95] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2025 EpicQuest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer