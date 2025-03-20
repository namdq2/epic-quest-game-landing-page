import React from 'react';
import { Play } from 'lucide-react';

function Trailer() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Game Trailer</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Watch the epic trailer and discover the world of EpicQuest.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Main Trailer */}
          <div className="relative aspect-video bg-black/50 rounded-2xl overflow-hidden mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#00ff95] text-black p-6 rounded-full hover:bg-[#00cc78] transition-transform hover:scale-110">
                <Play className="w-8 h-8" />
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80" 
              alt="Trailer Thumbnail"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          {/* Additional Videos */}
          <h2 className="text-2xl font-bold mb-8">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-[#00ff95] text-black p-4 rounded-full hover:bg-[#00cc78] transition-transform hover:scale-110">
                  <Play className="w-6 h-6" />
                </button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80" 
                alt="Gameplay Video 1"
                className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-semibold">Combat System Overview</h3>
                <p className="text-sm text-gray-400">3:45</p>
              </div>
            </div>

            <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-[#00ff95] text-black p-4 rounded-full hover:bg-[#00cc78] transition-transform hover:scale-110">
                  <Play className="w-6 h-6" />
                </button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80" 
                alt="Gameplay Video 2"
                className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-semibold">World Exploration</h3>
                <p className="text-sm text-gray-400">5:20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trailer