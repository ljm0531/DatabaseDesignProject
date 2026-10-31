# 🏕️ Smart GoCamping - 프론트엔드 구동 가이드

한국관광공사 GoCamping Open API 기반 캠핑장 정보 조회 및 위치 기반 서비스 프론트엔드 프로젝트입니다. 팀원들의 로컬 개발 환경 구축 및 테스트를 위한 설치 및 구동 절차를 안내합니다.

---

## 📌 1. 사전 준비 사항 (Prerequisites)

프로젝트를 구동하기 전에 아래 도구들이 설치되어 있어야 합니다.

1. **Node.js (LTS 버전 권장)**
   * [Node.js 공식 홈페이지](https://nodejs.org/)에서 LTS 버전을 설치합니다. (npm이 함께 설치됩니다.)
   * **설치 확인**: 터미널에 아래 명령어를 입력하여 버전이 출력되는지 확인합니다.
     ```bash
     node -v
     npm -v
     ```
   * ⚠️ *Node.js를 새로 설치한 경우, 반드시 VS Code를 완전히 종료 후 다시 실행해 주세요.*

2. **VS Code 확장 프로그램 (권장)**
   * **ES7+ React/Redux/React-Native snippets**
   * **Tailwind CSS IntelliSense**

---

## 📁 2. 프론트엔드 디렉토리 구조

`frontend/` 폴더 내부 구조가 아래와 같이 유지되어야 컴파일 에러가 발생하지 않습니다.

```text
goCampingDB/frontend/
├── public/
│   └── index.html               # Tailwind CDN 및 Kakao Map SDK 포함
├── src/
│   ├── components/              # 공통 및 독립 UI 컴포넌트
│   │   ├── Header.jsx           # 상단 헤더
│   │   ├── FilterBar.jsx        # 녹색 필터바
│   │   ├── MapArea.jsx          # 지도 대체/연동 영역
│   │   ├── CampingCard.jsx      # 검색 결과 카드 아이템
│   │   ├── GallerySlider.jsx    # 상세 페이지 갤러리
│   │   └── FacilityGrid.jsx     # 주요 시설 4격자
│   ├── pages/                   # 주요 화면 단위
│   │   ├── MainSearchPage.jsx   # 1 메인 검색 화면
│   │   └── CampingDetailPage.jsx# 2 캠핑장 상세 정보 화면
│   ├── App.jsx                  # 루트 페이지 전환 컴포넌트
│   ├── index.js                 # React 앱 진입점
│   └── index.css                # 글로벌 스타일 정의
└── package.json                 # 프로젝트 의존성 관리 파일

## 📁 3. 테스트 절차
cd frontend
npm install
npm install lucide-react
npm start

## 4. 스타일(Tailwind CSS) 적용 안내
프로젝트 UI 스타일은 Tailwind CSS 기반으로 작성되었습니다. 만약 웹 페이지 화면이 기본 HTML 텍스트처럼 깨져 보이는 경우 아래 설정을 확인하세요.
public/index.html 설정 확인:<head> 태그 내부에 아래 Tailwind CDN 스크립트가 포함되어 있어야 합니다.
<script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>