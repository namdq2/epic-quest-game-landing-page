import React from 'react';
import { Download as DownloadIcon, Monitor, Apple, Link as Linux } from 'lucide-react';

function Download() {
  const downloads = [
    {
      platform: "Windows",
      icon: <Monitor className="w-8 h-8" />,
      version: "v1.0.0",
      size: "45.2 GB",
      requirements: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1660 / AMD RX 5600 XT",
        storage: "50 GB available space"
      }
    },
    {
      platform: "macOS",
      icon: <Apple className="w-8 h-8" />,
      version: "v1.0.0",
      size: "45.2 GB",
      requirements: {
        os: "macOS 11.0 or later",
        processor: "Apple M1 / Intel Core i5",
        memory: "16 GB RAM",
        graphics: "Metal-capable GPU",
        storage: "50 GB available space"
      }
    },
    {
      platform: "Linux",
      icon: <Linux className="w-8 h-8" />,
      version: "v1.0.0",
      size: "45.2 GB",
      requirements: {
        os: "Ubuntu 20.04 or equivalent",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1660 / AMD RX 5600 XT",
        storage: "50 GB available space"
      }
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Download EpicQuest</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Choose your platform and begin your adventure today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {downloads.map((platform, index) => (
            <div 
              key={index}
              className="bg-black/50 rounded-2xl border border-[#00ff95]/20 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                {platform.icon}
                <h3 className="text-2xl font-bold">{platform.platform}</h3>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-400 mb-2">Version: {platform.version}</div>
                <div className="text-gray-400">Size: {platform.size}</div>
              </div>

              <button className="w-full bg-[#00ff95] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#00cc78] transition-colors flex items-center justify-center gap-2 mb-6">
                <DownloadIcon className="w-5 h-5" />
                Download
              </button>

              <div className="text-sm">
                <h4 className="font-semibold mb-2">System Requirements:</h4>
                <ul className="text-gray-400 space-y-1">
                  <li>OS: {platform.requirements.os}</li>
                  <li>Processor: {platform.requirements.processor}</li>
                  <li>Memory: {platform.requirements.memory}</li>
                  <li>Graphics: {platform.requirements.graphics}</li>
                  <li>Storage: {platform.requirements.storage}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-gray-400 mb-6">
            If you encounter any issues during download or installation, check our troubleshooting guide or contact our support team.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-colors">
              Troubleshooting Guide
            </button>
            <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download