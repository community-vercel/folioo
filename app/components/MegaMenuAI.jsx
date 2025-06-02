'use client';

import { useState } from 'react';

const tabs = [
  {
    label: 'COMPUTER VISION',
    content: {
      left: {
        title: 'INDUSTRIES',
        items: [
          'Healthcare',
          'Security',
          'Fitness',
          'Services',
          'Automotive',
          'Transportation',
          'Travel'
        ]
      },
      middle: {
        title: 'COMPUTER VISION',
        items: [
          'AI Fashion Tagging',
          'Visual Search',
          'AI Image Processing',
          'Image Analytics',
          'Building Access Control'
        ]
      },
      right: {
        title: '',
        items: [
          'AI Object Detection',
          'Image Similarity',
          'Image Segmentation',
          'Video Analytics'
        ]
      },
      bottom: {
        title: 'PRE-BUILT MODELS',
        items: [
          'Vehicle Detection',
          'Person Detection',
          'Apparel Detection',
          'Face Recognition',
          'Food Detection',
          'Animal Detection'
        ]
      }
    }
  },
  {
    label: 'AI DRONES',
    content: {
      left: { title: '', items: [] },
      middle: { title: '', items: [] },
      right: { title: '', items: [] },
      bottom: { title: '', items: [] }
    }
  },
  {
    label: 'PREDICTIVE ANALYTICS',
    content: {
      left: { title: '', items: [] },
      middle: { title: '', items: [] },
      right: { title: '', items: [] },
      bottom: { title: '', items: [] }
    }
  },
  {
    label: 'MACHINE LEARNING',
    content: {
      left: { title: '', items: [] },
      middle: { title: '', items: [] },
      right: { title: '', items: [] },
      bottom: { title: '', items: [] }
    }
  },
  {
    label: 'NATURAL LANGUAGE PROCESSING',
    content: {
      left: { title: '', items: [] },
      middle: { title: '', items: [] },
      right: { title: '', items: [] },
      bottom: { title: '', items: [] }
    }
  }
];

export default function MegaMenuAI() {
  const [activeTab, setActiveTab] = useState(0);
  const activeContent = tabs[activeTab].content;

  return (
    <div className="absolute top-full left-0 w-screen max-w-[1100px] bg-gray-100 text-sm shadow-lg p-0 z-50 flex border-t border-gray-300">
      {/* Left Tabs */}
      <div className="w-1/5 bg-white border-r border-gray-300">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveTab(idx)}
            className={`px-4 py-3 font-semibold cursor-pointer hover:bg-gray-200 ${
              activeTab === idx ? 'bg-gray-100 border-l-4 border-red-600 text-red-600' : ''
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Right Panel Content */}
<div className="flex-1 px-10 py-8 space-y-8">
        {/* Top Row */}
        <div className="flex space-x-6">
          {['left', 'middle', 'right'].map((section, i) => {
            const sec = activeContent[section];
            return sec?.items?.length ? (
              <div key={i} className="w-1/3">
                {sec.title && <h3 className="font-bold mb-2 text-gray-800">{sec.title}</h3>}
<ul className="space-y-2 text-gray-700">
                  {sec.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-1">
                      <span className="text-red-600 text-xl leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null;
          })}
        </div>

        {/* Bottom Row */}
        {activeContent.bottom.items.length > 0 && (
          <div>
            <h3 className="font-bold mb-2 text-gray-800">{activeContent.bottom.title}</h3>
            <ul className="grid grid-cols-3 gap-2 text-gray-700">
              {activeContent.bottom.items.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-1">
                  <span className="text-red-600 text-xl leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
