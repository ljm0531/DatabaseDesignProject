import React from 'react';
import { Tent, ShowerHead, ShieldCheck, Zap } from 'lucide-react';

export default function FacilityGrid() {
  const items = [
    { title: '야영장 유형', desc: '글램핑, 일반, 오토캠핑', icon: <Tent className="text-amber-600" size={20} /> },
    { title: '편의 시설', desc: '화장실(2개), 샤워실(2개), 개수대', icon: <ShowerHead className="text-blue-600" size={20} /> },
    { title: '안전 장비', desc: '소화기(40개), 화재감지기(7개)', icon: <ShieldCheck className="text-red-500" size={20} /> },
    { title: '부대 시설', desc: '전기, 무선인터넷, 온수, 물놀이장', icon: <Zap className="text-amber-500" size={20} /> },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 text-xs">
      {items.map((item, idx) => (
        <div key={idx} className="bg-gray-50 border p-3 rounded-xl flex items-start gap-2.5 shadow-sm">
          {item.icon}
          <div>
            <span className="font-bold block text-gray-800">{item.title}</span>
            <span className="text-gray-600">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}