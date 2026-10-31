import React from 'react';
import { Navigation } from 'lucide-react';

export default function FilterBar() {
  return (
    <div className="bg-[#1e4d3b] text-white px-6 py-2 flex flex-wrap items-center justify-between gap-2 shadow-md">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <select className="bg-white text-gray-800 rounded px-2 py-1 font-semibold border-none outline-none">
          <option>지역: 전체</option>
          <option>경기도</option>
          <option>강원도</option>
          <option>경상북도</option>
        </select>

        <select className="bg-white text-gray-800 rounded px-2 py-1 font-semibold border-none outline-none">
          <option>입지구분: 숲/산</option>
          <option>해변/바다</option>
          <option>호수</option>
        </select>

        <select className="bg-white text-gray-800 rounded px-2 py-1 font-semibold border-none outline-none">
          <option>유형: 글램핑/오토캠핑</option>
          <option>카라반</option>
          <option>일반야영장</option>
        </select>

        <select className="bg-white text-gray-800 rounded px-2 py-1 font-semibold border-none outline-none">
          <option>반경: 10km</option>
          <option>5km</option>
          <option>20km</option>
        </select>

        <select className="bg-white text-gray-800 rounded px-2 py-1 font-semibold border-none outline-none">
          <option>반려견 동반 가능</option>
          <option>불가</option>
        </select>
      </div>

      {/* 내 주변 검색 토글 버튼 */}
      <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1.5 transition-colors shadow-sm">
        <Navigation size={12} />
        <span>내 주변 검색</span>
      </button>
    </div>
  );
}