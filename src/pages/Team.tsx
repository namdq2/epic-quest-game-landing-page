import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Team() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Game Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "10+ years of game development experience, previously worked on major AAA titles.",
      social: {
        github: "#",
        linkedin: "#",
        email: "mailto:sarah@epicquest.game"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Full-stack developer with a passion for creating immersive gaming experiences.",
      social: {
        github: "#",
        linkedin: "#",
        email: "mailto:marcus@epicquest.game"
      }
    },
    {
      name: "Emily Taylor",
      role: "Art Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Award-winning artist specializing in fantasy and character design.",
      social: {
        github: "#",
        linkedin: "#",
        email: "mailto:emily@epicquest.game"
      }
    },
    {
      name: "David Park",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Experienced game designer focused on player engagement and world building.",
      social: {
        github: "#",
        linkedin: "#",
        email: "mailto:david@epicquest.game"
      }
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Meet Our Team</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          The talented individuals behind EpicQuest, working together to create an unforgettable gaming experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-black/50 rounded-2xl border border-[#00ff95]/20 overflow-hidden hover:border-[#00ff95]/40 transition-all"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-[#00ff95] text-sm mb-4">{member.role}</div>
                <p className="text-gray-400 text-sm mb-6">{member.bio}</p>
                <div className="flex gap-4">
                  <a href={member.social.github} className="text-gray-400 hover:text-[#00ff95] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-[#00ff95] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.email} className="text-gray-400 hover:text-[#00ff95] transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team