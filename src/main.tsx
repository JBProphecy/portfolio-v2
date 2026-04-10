import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WA } from './app/windows/WA.tsx'
import { WB } from './app/windows/WB.tsx'
import { WC } from './app/windows/WC.tsx'
import { WD } from './app/windows/WD.tsx'
import { PA } from './app/printer/PA.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WD />
  </StrictMode>,
)
