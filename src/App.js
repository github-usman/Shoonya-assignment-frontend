import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import PageNotfound from "./components/_404";
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const IndividualRetreatDetails = lazy(() => import('./pages/IndividualRetreatDetails'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/individual-retreat-details" element={<IndividualRetreatDetails />} />
            <Route path="*" element={<PageNotfound />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </Router>

  );
}

export default App;
