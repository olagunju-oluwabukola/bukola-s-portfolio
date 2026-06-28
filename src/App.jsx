import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import GalleryPage from './pages/GalleryPage'
import ResumePage from './pages/ResumePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="resume" element={<ResumePage />} />
      </Route>
    </Routes>
  )
}

export default App