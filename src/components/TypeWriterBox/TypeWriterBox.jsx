import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterBox = ({
                           strings = ["Olá Mundo!"],
                           autoStart = true,
                           loop = true,
                           delay = 75,
                           deleteSpeed = 50,
                           pauseFor = 1500,
                           className = ""
                       }) => {
    return (
        <div className={`typewriter-container ${className}`}>
            <Typewriter
                options={{
                    strings: strings,
                    autoStart: autoStart,
                    loop: loop,
                    delay: delay,
                    deleteSpeed: deleteSpeed,
                    pauseFor: pauseFor,
                    wrapperClassName: "typewriter-text", // Classe para o texto
                    cursorClassName: "typewriter-cursor" // Classe para o cursor |
                }}
            />
        </div>
    );
};

export default TypewriterBox;