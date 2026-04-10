import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WD } from './app/windows/WD.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WD />
  </StrictMode>,
)
