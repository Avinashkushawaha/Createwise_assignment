import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout/Layout'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouteIndex } from './helpers/RouteName'
import Index from './pages/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path={RouteIndex} element={<Layout />}>
      <Route element={<Index />} />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
