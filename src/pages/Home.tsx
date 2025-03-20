import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sword, Trophy, Users } from 'lucide-react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00ff95]/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Epic<span className="text-[#00ff95]">Quest</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
              Embark on a legendary journey through a vast open world filled with magic, monsters, and epic adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/download"
                className="bg-[#00ff95] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#00cc78] transition-colors flex items-center justify-center gap-2"
              >
                Download Now <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/trailer"
                className="bg-white/10 hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors text-center"
              >
                Watch Trailer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">Game Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-black/50 p-6 md:p-8 rounded-2xl border border-[#00ff95]/20 hover:border-[#00ff95]/40 transition-colors">
              <Sword className="w-12 h-12 text-[#00ff95] mb-6" />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Epic Combat System</h3>
              <p className="text-gray-400">Master a deep combat system with unique abilities, combos, and strategic gameplay.</p>
            </div>
            <div className="bg-black/50 p-6 md:p-8 rounded-2xl border border-[#00ff95]/20 hover:border-[#00ff95]/40 transition-colors">
              <Trophy className="w-12 h-12 text-[#00ff95] mb-6" />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Challenging Quests</h3>
              <p className="text-gray-400">Take on epic quests that will test your skills and reward you with legendary loot.</p>
            </div>
            <div className="bg-black/50 p-6 md:p-8 rounded-2xl border border-[#00ff95]/20 hover:border-[#00ff95]/40 transition-colors">
              <Users className="w-12 h-12 text-[#00ff95] mb-6" />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Multiplayer World</h3>
              <p className="text-gray-400">Join forces with friends to tackle challenging dungeons and world bosses.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-[#00ff95] hover:text-[#00cc78] transition-colors"
            >
              View All Features <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80" 
              alt="Game Screenshot 1"
              className="rounded-2xl hover:scale-105 transition-transform duration-300 w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80" 
              alt="Game Screenshot 2"
              className="rounded-2xl hover:scale-105 transition-transform duration-300 w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home