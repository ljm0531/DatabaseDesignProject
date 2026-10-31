import React, { useState } from 'react';
import Header from '../components/Header';
import {
  ArrowLeft,
  Heart,
  Star,
  MapPin,
  Phone,
  ExternalLink,
  ShieldCheck,
  Flame,
  Wifi,
  Sparkles,
} from 'lucide-react';

export default function CampingDetailPage({ site, onBack }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: '서동현',
      rating: 5,
      content: '화장실과 글램핑 시설이 매우 깨끗하고 시설 관리가 잘 되어있어서 좋았어요. 청결을 중요하게 생각하시는 분들께 추천해요.',
    },
    {
      id: 2,
      author: '이하늘',
      rating: 4.5,
      content: '아이들과 다녀왔는데 수영장이 있어서 매일 물놀이하며 즐겁게 보냈습니다. 다음에도 재방문할 생각입니다.',
    },
  ]);
  const [newReviewText, setNewReviewText] = useState('');
  const [newRating, setNewRating] = useState(5);

  const galleryImages = [
    site?.firstImageUrl || 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
    'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&q=80',
    'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80',
  ];

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;
    setReviews([
      ...reviews,
      {
        id: Date.now(),
        author: '사용자',
        rating: Number(newRating),
        content: newReviewText,
      },
    ]);
    setNewReviewText('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <Header onSearch={() => {}} />

      <main className="max-w-[1200px] w-full mx-auto p-4 flex-1">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={onBack}
          className="mb-3 flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-emerald-800 transition-colors bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm"
        >
          <ArrowLeft size={14} /> 목록으로 돌아가기
        </button>

        {/* 상단 타이틀 & 즐겨찾기 */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">{site?.facltNm || '80 SS 오토캠핑장'}</h1>
            <p className="text-xs text-gray-500 mt-0.5">{site?.addr1 || '경북 군위군 부계면 남산리 1138-4번지'}</p>
          </div>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold border flex items-center gap-1.5 transition-colors ${
              isBookmarked
                ? 'bg-rose-500 text-white border-rose-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Heart size={14} fill={isBookmarked ? 'currentColor' : 'none'} />
            <span>{isBookmarked ? '즐겨찾기됨' : '즐겨찾기 추가'}</span>
          </button>
        </div>

        {/* 1. 갤러리 슬라이더 영역 (와이어프레임 2번 상단) */}
        <section className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="갤러리"
                onClick={() => setActiveImg(idx)}
                className={`w-full h-48 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                  activeImg === idx ? 'border-emerald-600 scale-[1.01]' : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="썸네일"
                onClick={() => setActiveImg(idx)}
                className={`w-16 h-12 object-cover rounded-md cursor-pointer border ${
                  activeImg === idx ? 'border-emerald-600 ring-2 ring-emerald-500/30' : 'border-gray-200'
                }`}
              />
            ))}
          </div>
        </section>

        {/* 2. 캠핑장 기본 정보 & 예약/지도 (2열 구조) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* 한줄소개 및 연락처 */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 border-b pb-1.5">캠핑장 소개</h2>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                {site?.lineIntro || '청정 숲속에 글램핑과 오토캠핑이 공존하는 공간입니다. 자연을 만끽하며 휴식을 취하실 수 있습니다.'}
              </p>
              <div className="space-y-1.5 text-xs text-gray-600">
                <p className="flex items-center gap-1.5"><MapPin size={13} className="text-emerald-700" /> <b>주소:</b> {site?.addr1}</p>
                <p className="flex items-center gap-1.5"><Phone size={13} className="text-emerald-700" /> <b>연락처:</b> 054-382-0007</p>
                <p className="flex items-center gap-1.5"><Sparkles size={13} className="text-emerald-700" /> <b>운영형태:</b> 지자체 / 민간 직영</p>
              </div>
            </div>
          </div>

          {/* 실시간 예약 & MAP 미니 박스 */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col justify-between">
            <a
              href={site?.resveUrl || 'http://80sscamping.com'}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors mb-3"
            >
              <ExternalLink size={14} /> 실시간 예약하러 가기
            </a>
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 text-center">
              <span className="text-[11px] font-bold text-gray-700 block mb-1">MAP 위치 미리보기</span>
              <div className="w-full h-24 bg-emerald-100/60 rounded flex items-center justify-center text-emerald-800 text-xs font-bold border border-emerald-200">
                📍 {site?.facltNm || '캠핑장 위치'}
              </div>
            </div>
          </div>
        </div>

        {/* 3. 주요 시설 & 안전 현황 (4격자 파티션) */}
        <section className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm mb-4">
          <h2 className="text-sm font-bold text-gray-800 mb-3 border-b pb-1.5">주요 시설 & 안전 현황</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xs font-bold text-emerald-800 block mb-1 flex items-center gap-1">
                <Sparkles size={13} /> 야영장 유형
              </span>
              <p className="text-xs text-gray-600">일반야영장, 자동차야영장, 글램핑</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xs font-bold text-emerald-800 block mb-1 flex items-center gap-1">
                <Wifi size={13} /> 편의 시설
              </span>
              <p className="text-xs text-gray-600">화장실(2), 샤워실(2), 개수대(2)</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xs font-bold text-emerald-800 block mb-1 flex items-center gap-1">
                <ShieldCheck size={13} /> 안전 장비
              </span>
              <p className="text-xs text-gray-600">소화기(40), 화재감지기(7)</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xs font-bold text-emerald-800 block mb-1 flex items-center gap-1">
                <Flame size={13} /> 부대 시설
              </span>
              <p className="text-xs text-gray-600">전기, 무선인터넷, 물놀이장, 놀이터</p>
            </div>
          </div>
        </section>

        {/* 4. 사용자 리뷰 및 별점 작성 폼 */}
        <section className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <h2 className="text-sm font-bold text-gray-800 mb-3 border-b pb-1.5">사용자 리뷰 및 별점</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* 평균 별점 요약 */}
            <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-bold text-gray-600 mb-1">평균 리뷰 별점</span>
              <div className="flex items-center gap-1 text-2xl font-extrabold text-amber-500">
                <Star size={24} fill="currentColor" /> 4.8 <span className="text-xs text-gray-400 font-normal">/ 5.0</span>
              </div>
            </div>

            {/* 리뷰 카드 리스트 */}
            <div className="md:col-span-2 space-y-2 max-h-48 overflow-y-auto pr-1">
              {reviews.map((rev) => (
                <div key={rev.id} className="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-gray-800">{rev.author}</span>
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5">
                      <Star size={11} fill="currentColor" /> {rev.rating}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600">{rev.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 새로운 리뷰 작성 입력창 */}
          <form onSubmit={handleAddReview} className="bg-gray-50 p-3 rounded-xl border border-gray-200 flex flex-col md:flex-row gap-2 items-center">
            <select
              value={newRating}
              onChange={(e) => setNewRating(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-xs font-bold text-amber-500 outline-none"
            >
              <option value="5">★ 5.0</option>
              <option value="4">★ 4.0</option>
              <option value="3">★ 3.0</option>
              <option value="2">★ 2.0</option>
              <option value="1">★ 1.0</option>
            </select>
            <input
              type="text"
              placeholder="리뷰를 작성해 주세요..."
              value={newReviewText}
              onChange={(e) => setNewReviewText(e.target.value)}
              className="flex-1 w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-1.5 rounded-lg text-xs transition-colors"
            >
              등록
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}