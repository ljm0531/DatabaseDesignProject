import React from 'react';
import { Search, Trees } from 'lucide-react';

export default function Header({ onSearch }) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-2.5 flex items-center justify-between shadow-sm">
      {/* 1. 로고 & 프로젝트 정보 */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-emerald-800 font-extrabold text-lg">
          <Trees className="text-emerald-600" size={26} />
          <span>Smart GoCamping</span>
        </div>
        <span className="text-xs text-gray-500 hidden lg:inline border-l pl-3 border-gray-300">
          단국대학교 컴퓨터공학과 DB 설계 프로젝트
        </span>
      </div>

      {/* 2. 중앙 검색창 */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="지역, 야영장명, 키워드 검색.."
            className="w-full bg-gray-100 border border-gray-300 rounded-lg pl-3 pr-10 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <button className="absolute right-0 bg-emerald-700 text-white p-2 rounded-r-lg hover:bg-emerald-800 transition-colors">
            <Search size={14} />
          </button>
        </div>
      </div>

      {/* 3. 우측 메뉴 */}
      <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
        <button className="hover:text-emerald-700">로그인 / 회원가입</button>
        <span className="bg-rose-600 text-white font-extrabold text-[10px] px-1.5 py-0.5 rounded">DB설계</span>
      </div>
    </header>
  );
}