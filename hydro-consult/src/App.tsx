import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import HomePage from './pages/HomePage'

// import HomePage from './pages/HomePage'
// import AboutPage   from './pages/AboutPage'
// import ServicesPage from './pages/ServicesPage'
// import ProjectsPage from './pages/ProjectsPage'
// import CareersPage from './pages/CareersPage'
// import NewsPage    from './pages/NewsPage'
// import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-20">   {/* push content below fixed Navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about-us" element={<AboutPage />} />
          <Route path="/our-services" element={<ServicesPage />} />
          <Route path="/our-project" element={<ProjectsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/news-and-events" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
