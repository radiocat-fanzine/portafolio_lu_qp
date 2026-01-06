import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProjectLayout from './layout/ProjectLayout'

import Home from './pages/Home'
import Certificates from './pages/Certificates'

import Product from './pages/Product'
import UXResearch from './pages/UXResearch'
import GraphicDesign from './pages/GraphicDesign'

function App() {
  return (
    <Routes>
      {/* Layout general */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="certificates" element={<Certificates />} />
      </Route>

      {/* ProjectLayout para proyectos individuales */}
      <Route path="portfolio/product/*" element={<ProjectLayout />}>
        <Route index element={<Product />} />
      </Route>

      <Route path="portfolio/ux-research/*" element={<ProjectLayout />}>
        <Route index element={<UXResearch />} />
      </Route>

      <Route path="portfolio/graphic-design/*" element={<ProjectLayout />}>
        <Route index element={<GraphicDesign />} />
      </Route>
    </Routes>
  )
}

export default App
