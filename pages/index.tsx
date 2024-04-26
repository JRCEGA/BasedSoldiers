import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
                <h1>WHO ARE WE?</h1>
                <div id="separationBar2"></div>
                <br />
                <p>
                  Before we start. I want to thank the web designer and the art creator for making this idea possible and achieving it with me. With that said. lets begin by saying that BasedSoldiers is an idea that emerged two years ago. Back then. it wasnt pixel art. and it wasnt on the Base network as it didn't even exist. The art was of soldiers. and we even uploaded it to OpenSea. but there was no success at that time. Among the group of friends. the idea of releasing the sol-diet NFTs always persisted.
                  <br className="br"/>
                  <br />
                  Time moved on. and we acquired enough knowledge to develop the project property two years Later. Our team consists of three people:
                  <br className="br"/>
                  Two of us studied in the computing/ technology field
                  <br className="br"/>
                  and one is a high school- student.
                  <br className="br"/>
                  <br />
                  The developer has three years of experience in cryptos. the web designer has two years of experience with cryptos. and the art director has no experience in crypto. just drawing experience. so I made a special- request for this collection. The purpose of the collection is purely to share the idea and the art that was developed at one point; we want to bring together people who appreciate NFTs and see value beyond just an image. We believe we have a concept that is different from existing ones and think we can gather a community with this collection. We hope you can enjoy it as much as we enjoyed developing the idea.
                </p>
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

export default MiPagina;

