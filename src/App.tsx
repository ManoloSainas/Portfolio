import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './layout/layout'
import { Home } from './pages/home/home'
import { ChiSono } from './pages/chisono/chisono'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="ChiSono" element={<ChiSono />} />
      </Route>
    </Routes>
  )
}

export default App
