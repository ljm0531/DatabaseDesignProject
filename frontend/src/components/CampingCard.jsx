import React from 'react';
import { Star, Heart } from 'lucide-react';

export default function CampingCard({ site, isBookmarked, onSelectSite, onToggleBookmark }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all flex gap-3 items-center">
      {/* 썸네일 */}
      <img
        src={site.firstImageUrl}
        alt={site.facltNm}
        className="w-24 h-24 object-cover rounded-lg flex-shrink-0 border"
      />

      {/* 정보 */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-gray-900 text-xs truncate">{site.facltNm}</h3>
          
          <div className="flex flex-wrap gap-1 my-1">
            {site.tags.map((tag, idx) => (
              <span key={idx} className="bg-emerald-50 text-emerald-800 text-[9px] font-semibold px-1 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold mb-0.5">
            <Star size={11} fill="currentColor" /> {site.rating}
            <span className="text-gray-400 font-normal">({site.reviewCount})</span>
          </div>
          <p className="text-[10px] text-gray-500 truncate">{site.addr1}</p>
        </div>

        {/* 버튼 */}
        <div className="flex gap-1.5 mt-2">
          <button
            onClick={() => onSelectSite(site)}
            className="flex-1 bg-white border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white text-[11px] py-1 rounded font-bold transition-colors"
          >
            상세보기
          </button>
          <button
            onClick={() => onToggleBookmark(site.contentId)}
            className={`px-2 py-1 rounded text-[11px] font-bold border transition-colors flex items-center gap-0.5 ${
              isBookmarked
                ? 'bg-rose-500 text-white border-rose-500'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Heart size={11} fill={isBookmarked ? 'currentColor' : 'none'} />
            <span>즐겨찾기</span>
          </button>
        </div>
      </div>
    </div>
  );
}