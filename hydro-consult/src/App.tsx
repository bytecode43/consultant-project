
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';


export default function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-project" element={<ProjectsPage />} />
          {/* <Route path="/about-us"     element={<AboutPage />} /> */}
          {/* <Route path="/news-events" element={<NewsPage  />} /> */}
          {/* …other routes… */}
        </Routes>

    </BrowserRouter>
  );
}

