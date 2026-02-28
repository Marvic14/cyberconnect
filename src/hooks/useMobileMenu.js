import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useMobileMenu() {
    // Estado que diz se o menu está ativo (true) ou inativo (false)
    const [menuAtivo, setMenuAtivo] = useState(false);

    // O useLocation nos avisa sempre que a URL muda
    const location = useLocation();

    // Função que inverte o valor de menuAtivo
    // Se está true vira false, se está false vira true.
    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    // Esse useEffect "escuta" a variável location.
    // Toda vez que você muda de página, ele executa a função dentro dele
    useEffect(() => {
        setMenuAtivo(false); // Fecha o menu ao navegar
    }, [location]);

    // Retornamos apenas o que o nosso componente Header precisa saber
    return {
        menuAtivo,
        toggleMenu
    };
}