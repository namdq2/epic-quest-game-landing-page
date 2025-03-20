import React from 'react';
import { Sword, Shield, Wand2, Users, Trophy, Map, Palette, Zap } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: <Sword className="w-12 h-12 text-[#00ff95]" />,
      title: "Combat System",
      description: "Master an intricate combat system featuring combos, special abilities, and tactical gameplay. Chain attacks, dodge enemy strikes, and unleash devastating finishing moves."
    },
    {
      icon: <Shield className="w-12 h-12 text-[#00ff95]" />,
      title: "Character Classes",
      description: "Choose from multiple unique character classes, each with their own abilities, progression paths, and playstyles. Customize your build to suit your preferred combat approach."
    },
    {
      icon: <Wand2 className="w-12 h-12 text-[#00ff95]" />,
      title: "Magic System",
      description: "Harness powerful magic through an innovative spell-crafting system. Combine elements, discover rare spells, and create your own magical combinations."
    },
    {
      icon: <Users className="w-12 h-12 text-[#00ff95]" />,
      title: "Multiplayer",
      description: "Team up with friends in seamless multiplayer mode. Take on challenging raid bosses, explore dangerous dungeons, and engage in epic PvP battles."
    },
    {
      icon: <Trophy className="w-12 h-12 text-[#00ff95]" />,
      title: "Achievement System",
      description: "Complete challenging achievements to unlock unique rewards, titles, and cosmetic items. Show off your accomplishments to other players."
    },
    {
      icon: <Map className="w-12 h-12 text-[#00ff95]" />,
      title: "Open World",
      description: "Explore a vast, seamless open world filled with hidden treasures, dangerous enemies, and stunning landscapes. Discover secret locations and complete side quests."
    },
    {
      icon: <Palette className="w-12 h-12 text-[#00ff95]" />,
      title: "Customization",
      description: "Personalize your character's appearance with detailed character creation and extensive cosmetic options. Collect and craft unique armor and weapon skins."
    },
    {
      icon: <Zap className="w-12 h-12 text-[#00ff95]" />,
      title: "Dynamic Events",
      description: "Participate in dynamic world events that change based on player actions. Join massive battles, defend cities from invasions, and influence the game world."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Game Features</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Discover all the exciting features that make EpicQuest a truly unique gaming experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/50 p-8 rounded-2xl border border-[#00ff95]/20 hover:border-[#00ff95]/40 transition-all hover:transform hover:-translate-y-1"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features