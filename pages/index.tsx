import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import dynamic from 'next/dynamic';

const MiPagina = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Función para ocultar el splash screen
  const hideSplashScreen = () => setShowSplash(false);

  useEffect(() => {
    // Configurar el temporizador para ocultar el splash screen después de un tiempo
    setShowSplash(true)
    let timer = setTimeout(hideSplashScreen, 5000);

    return () => {
      // Limpia el temporizador si el componente se desmonta
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Based Soldiers</title>
      </Head>
      {showSplash ? (
        <div className="splash" onClick={() => setShowSplash(false)}>
          <Image
            className="splash-header"
            src="/BasedSoldiersLogo.png"
            alt="splashscreen"
            width={1000}
            height={1000}
            priority
            placeholder="empty"
           />
        </div>
      ) : (
      <div className={showSplash ? 'hidden-content' : ''}>
        <div className="mainHeader">
          <div>
            <div>
              <h1 id="mainHeaderTitle">Based Soldiers</h1>
            </div>
            <div className="walletConnectButton">
              <ConnectButton />
            </div>
          </div>
        </div>
        <div className="mainMenuContainer">
          <div id="introOptions">
            <h1 id="menuPhrase">ARMY strong. BASED in bravery. Built by SOLDIERS.</h1>
            <div className="optionsUI">
              <div className="optionSelectorUI">
                <div className="optionHome">
                  <button className="optionSelectorButton">About
                    <Image 
                        src="/images/home.png" 
                        alt="Home" 
                        width={200} 
                        height={200}
                        priority
                        placeholder="empty"
                      />
                  </button>
                </div>
                <div className="optionMint">
                  <button className="optionSelectorButton">Mint
                    <Image 
                      src="/images/mint.png" 
                      alt="Mint" 
                      width={200} 
                      height={200}
                      priority
                      placeholder="empty"
                    />
                  </button>
                </div>
                <div className="optionRoadmap">
                  <button className="optionSelectorButton">Roadmap
                    <Image 
                      src="/images/roadmap.png" 
                      alt="Roadmap" 
                      width={200} 
                      height={200}
                      priority
                      placeholder="empty"
                    />
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
          <div>
            <div id="footerText">
              Follow us on our social media
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
      </div>
      )}
    </>
  );
};

export default dynamic (() => Promise.resolve(MiPagina), { ssr: false });

