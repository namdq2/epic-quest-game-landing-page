import React from 'react';

function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Q2 2025",
      title: "Early Access Launch",
      items: [
        "Initial character classes and combat system",
        "First major zone release",
        "Basic crafting and progression systems",
        "Core PvE content and dungeons"
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Combat Evolution",
      items: [
        "Advanced combo system",
        "New weapon types and fighting styles",
        "First raid dungeon",
        "Enhanced PvP system"
      ]
    },
    {
      quarter: "Q4 2025",
      title: "World Expansion",
      items: [
        "Two new major zones",
        "Flying mount system",
        "Guild system implementation",
        "World events framework"
      ]
    },
    {
      quarter: "Q1 2026",
      title: "Social & Endgame",
      items: [
        "Housing system",
        "Advanced guild features",
        "New endgame content",
        "Social hubs and player markets"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Development Roadmap</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Follow our journey as we continue to expand and improve EpicQuest with new features and content.
        </p>

        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-16 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#00ff95]/20"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#00ff95]"></div>
              
              <div className="bg-black/50 p-8 rounded-2xl border border-[#00ff95]/20">
                <div className="text-[#00ff95] font-semibold mb-2">{item.quarter}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 flex items-start">
                      <span className="text-[#00ff95] mr-2">•</span>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap