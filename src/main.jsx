import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/main.scss"
import ReactGA from "react-ga4";

// Inicialize com o seu ID que vimos na imagem anterior
ReactGA.initialize("G-0S5C48DYBF");

// Envia o primeiro acesso
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
