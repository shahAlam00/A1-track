import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { VinVerification } from './pages/VinVerification';
import { HinVerification } from './pages/HinVerification';
import { TrackOrder } from './pages/TrackOrder';
import { NotFound } from './pages/NotFound';

// Parts Sub-pages
import { EnginePage } from './pages/parts/EnginePage';
import { TransmissionPage } from './pages/parts/TransmissionPage';
import { SteeringPage } from './pages/parts/SteeringPage';
import { AxlePage } from './pages/parts/AxlePage';
import { SuspensionPage } from './pages/parts/SuspensionPage';
import { ElectricalPage } from './pages/parts/ElectricalPage';
import PrivacyPolicy from './components/common/PrivacyPolicy';
import TermCondition from './components/common/TermCondition';
import RefundPolicy from './components/common/RefundPolicy';
import TermsUse from './components/common/TermsUse';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="vin-verification" element={<VinVerification />} />
          <Route path="hin-verification" element={<HinVerification />} />
          <Route path="track" element={<TrackOrder />} />

          {/* Dedicated Parts Category Routes */}
          <Route path="parts/engine" element={<EnginePage />} />
          <Route path="parts/transmission" element={<TransmissionPage />} />
          <Route path="parts/steering" element={<SteeringPage />} />
          <Route path="parts/axle" element={<AxlePage />} />
          <Route path="parts/suspension" element={<SuspensionPage />} />
          <Route path="parts/electrical" element={<ElectricalPage />} />



          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-and-conditions' element={<TermCondition />} />
          <Route path='/refund-policy' element={<RefundPolicy />} />
          <Route path="/terms-of-use" element={<TermsUse />} />
          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
