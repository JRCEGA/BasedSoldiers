import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const MiPagina = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Configurar el temporizador para ocultar el splash screen después de un tiempo
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Ajusta el tiempo como prefieras

    // Añadir un efecto de transición suave para el splash screen
    // Podrías añadir esto a tu archivo CSS:
    // .splash { transition: opacity 1s ease-in-out; }

    return () => {
      clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    };
  }, []);

  return (
    <>
      {showSplash && (
        <div className="splash" onClick={() => setShowSplash(false)}>
          <img className="splash-header" src="/BasedSoldiersLogo.png" alt="splashscreen" width="1000rem" height="1000rem"/>
        </div>
      )}
      <div className={showSplash ? 'hidden-content' : ''}>
        <div className="mainHeader">
          <Link href="/">
            <h1 id="mainHeaderTitle">Based Soldiers</h1>
          </Link>
          <div className="walletConnectButton">
            <ConnectButton />
          </div>
        </div>
        <div className="mainMenuContainer">
          <div id="introOptions">
            <h1>ARMY strong. BASED in bravery. Built by SOLDIERS.</h1>
            <div className="optionsUI">
              <div className="optionSelectorUI">
                <div className="optionHome">
                  <button id="homeOption">About
                    <img src="images/home.png" alt="Home" width="200rem" height="200rem"/>
                  </button>
                </div>
                <div className="optionMint">
                  <button id="mintOption">Mint
                    <img src="images/mint.png" alt="Mint" width="200rem" height="200rem"/>
                  </button>
                </div>
                <div className="optionRoadmap">
                  <button id="roadmapOption">Roadmap
                    <img src="images/roadmap.png" alt="Roadmap" width="200rem" height="200rem"/>
                  </button>
                </div>
              </div>
              <div id="separationBar"></div>
              <div className="contentScreen">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="mainFooter">
          <div id="footerText">
            <h1>Follow us on our social media</h1>
          </div>
          <div id="socialIcons">
            <a href="https://twitter.com/BasedSoldiers" className="icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://discord.gg/3tP5wnCFC3" className="icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Los scripts pueden ser importados en el archivo _document.js o usando useEffect si se necesita cargar dinámicamente */}
    </>
  );
};

export default MiPagina;

