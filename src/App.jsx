import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProjectLayout from './layout/ProjectLayout'

import Home from './pages/Home'
import Certificates from './components/certificates/Certificates'
import Product from './pages/Product'
import UXResearch from './pages/UXResearch'
import GraphicDesign from './pages/GraphicDesign'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Certificates */}
        <Route path="certificates" element={<Certificates />} />

        {/* Portfolio */}
        <Route path="portfolio" element={<ProjectLayout />}>
          <Route path="product" element={<Product />} />
          <Route path="ux-research" element={<UXResearch />} />
          <Route path="graphic-design" element={<GraphicDesign />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

