import React, { useState } from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import MapArea from '../components/MapArea';
import CampingCard from '../components/CampingCard';

const MOCK_SITES = [
  {
    contentId: 29,
    facltNm: '80 SS 오토캠핑장',
    addr1: '경북 군위군 부계면 남산리 1138-4번지',
    firstImageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&q=80',
    rating: 4.8,
    reviewCount: 12,
    tags: ['#숲속', '#글램핑', '#오토캠핑', '#대형수영장'],
    distance: '1.2km',
  },
  {
    contentId: 56,
    facltNm: 'THATS CAMPING 횡성자연휴양림',
    addr1: '강원도 횡성군 갑천면 정포로 430번길 113',
    firstImageUrl: 'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=500&q=80',
    rating: 4.5,
    reviewCount: 8,
    tags: ['#산', '#오토캠핑', '#글램핑'],
    distance: '3.5km',
  },
  {
    contentId: 4,
    facltNm: '(주)디노담양힐링파크 지점',
    addr1: '전남 담양군 봉산면 탄금길 9-26',
    firstImageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=500&q=80',
    rating: 4.7,
    reviewCount: 15,
    tags: ['#호수', '#카라반', '#체험프로그램'],
    distance: '2.9km',
  },
];

export default function MainSearchPage({ onSelectSite }) {
  const [bookmarks, setBookmarks] = useState({});

  const toggleBookmark = (id) => {
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <Header onSearch={() => {}} />
      <FilterBar />

      <main className="flex-1 flex flex-col lg:flex-row p-3 gap-3 max-w-[1400px] w-full mx-auto">
        {/* 좌측: 지도 */}
        <MapArea sites={MOCK_SITES} onSelectSite={onSelectSite} />

        {/* 우측: 검색 결과 목록 */}
        <section className="w-full lg:w-5/12 flex flex-col max-h-[calc(100vh-160px)] overflow-y-auto pr-1">
          <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm mb-2 flex justify-between items-center">
            <h2 className="font-bold text-gray-800 text-xs">
              검색 결과 <span className="text-emerald-700 font-extrabold">{MOCK_SITES.length}건</span>
            </h2>
            <span className="text-[11px] text-gray-400">정렬: 거리순</span>
          </div>

          <div className="flex flex-col gap-2">
            {MOCK_SITES.map((site) => (
              <CampingCard
                key={site.contentId}
                site={site}
                isBookmarked={!!bookmarks[site.contentId]}
                onSelectSite={onSelectSite}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}