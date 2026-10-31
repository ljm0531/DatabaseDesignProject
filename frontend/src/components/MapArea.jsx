import React from 'react';
import { MapPin, RefreshCw, Map as MapIcon } from 'lucide-react';

export default function MapArea({ sites, onSelectSite }) {
  return (
    <div className="w-full lg:w-7/12 bg-white rounded-xl border border-gray-300 p-3 shadow-sm flex flex-col justify-between relative min-h-[550px]">
      {/* 지도 상단 컨트롤 버튼 */}
      <div className="flex justify-between items-center z-10">
        <button className="bg-white/90 backdrop-blur text-gray-800 px-3 py-1.5 rounded-md text-xs font-bold border border-gray-300 shadow-sm flex items-center gap-1 hover:bg-gray-50">
          <MapPin size={13} className="text-red-500" /> 현재 위치
        </button>
        <button className="bg-white/90 backdrop-blur text-emerald-800 border border-emerald-600 px-3 py-1.5 rounded-md text-xs font-bold shadow-sm hover:bg-emerald-50 flex items-center gap-1">
          <RefreshCw size={12} /> 이 위치에서 재검색
        </button>
      </div>

      {/* 카카오 지도 위치 (흰색 대체 영역 및 마커) */}
      <div className="my-auto flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-200 rounded-lg bg-emerald-50/20">
        <div className="p-3 bg-emerald-100 text-emerald-800 rounded-full mb-2">
          <MapIcon size={32} />
        </div>
        <h4 className="text-sm font-bold text-gray-800 mb-1">카카오 지도 (Kakao Map) SDK 영역</h4>
        <p className="text-[11px] text-gray-500 max-w-xs mb-3">
          WGS84 위도/경도 좌표 기반 지도 렌더링 파티션[cite: 14]
        </p>

        {/* 와이어프레임 마커 버튼 모의 표현 */}
        <div className="flex flex-wrap gap-1.5 justify-center">
          <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
            📍 현재 위치
          </span>
          {sites.map((site) => (
            <button
              key={site.contentId}
              onClick={() => onSelectSite(site)}
              className="bg-white border border-emerald-600 text-emerald-900 hover:bg-emerald-100 text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm"
            >
              📍 {site.facltNm} ({site.distance})
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-[10px] text-gray-400 pt-1 border-t">
        <span>Kakao / Naver Map SDK Container</span>
        <span>Radius: 10km</span>
      </div>
    </div>
  );
}