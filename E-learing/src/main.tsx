import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <NavBar />
  </StrictMode>,
)
