import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

//Design system
import './styles/tokens.css'
import './styles/typography.css'
import './styles/base.css'

import './styles/components/home.css'
import './styles/components/cv.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

