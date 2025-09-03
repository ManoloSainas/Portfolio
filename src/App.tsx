import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './layout/layout'
import { Home } from './pages/home/home'
import { ChiSono } from './pages/chisono/chisono'
import { Progetti } from './pages/progetti/progetti'
import { Cv } from './pages/cv/cv'
import { Contatti } from './pages/contatti/contatti'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="ChiSono" element={<ChiSono />} />
        <Route path="Progetti" element={<Progetti />} />
        <Route path="CV" element={<Cv />} />
        <Route path="Contatti" element={<Contatti />} />
      </Route>
    </Routes>
  )
}

export default App
