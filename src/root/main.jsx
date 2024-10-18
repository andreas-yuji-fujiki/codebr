import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {LandingPage} from '../Pages/LandingPage/LandingPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
