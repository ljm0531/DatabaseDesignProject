import React, { useState } from 'react';
import MainSearchPage from './pages/MainSearchPage';
import CampingDetailPage from './pages/CampingDetailPage';

export default function App() {
  const [selectedSite, setSelectedSite] = useState(null);

  return (
    <div>
      {selectedSite ? (
        <CampingDetailPage site={selectedSite} onBack={() => setSelectedSite(null)} />
      ) : (
        <MainSearchPage onSelectSite={(site) => setSelectedSite(site)} />
      )}
    </div>
  );
}