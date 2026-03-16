import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from "react-ga4";

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        // 1. Resetar o scroll para o topo
        window.scrollTo(0, 0);

        // 2. Enviar a troca de página para o Google Analytics
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname + location.search
        });

    }, [location]); // Toda vez que a localização mudar, ele executa ambos

    return null;
}