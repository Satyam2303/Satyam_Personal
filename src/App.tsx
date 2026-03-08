import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { BeliefsPage } from "./pages/BeliefsPage";
import { HomePage } from "./pages/HomePage";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <ScrollManager />
      <SiteHeader />

      <main key={location.pathname} className="page-frame page-enter">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beliefs" element={<BeliefsPage />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  );
}
