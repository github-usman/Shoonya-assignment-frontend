import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import NotFoundPage from "./components/common/NotFoundPage";
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const IndividualRetreatDetails = lazy(() => import('./pages/IndividualRetreatDetails'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="grid text-center font-bold bg-spaceCadet text-white h-[100vh] items-center text-[28px]">Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/individual-retreat-details" element={<IndividualRetreatDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </Router>

  );
}

export default App;
