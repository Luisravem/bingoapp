import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalContextProvider from './components/Context/index.jsx'
import Wrapper from './components/Wrapper/index.jsx';
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContextProvider>
      <Wrapper/>
    </GlobalContextProvider>
  </StrictMode>
)
