import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import styles from '../styles/Index.module.css'

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
        <div className={styles.mainMenuContainer}>
          <div id="introOptions">
            <h1 id="menuPhrase">ARMY strong. BASED in bravery. Built by SOLDIERS.</h1>
            <div className={styles.optionSelectorUI}>
              <div>
                <Link href="/info">
                  <button className={styles.optionSelectorButton}>About
                    <Image 
                        src="/images/home.png" 
                        alt="Home" 
                        width={200} 
                        height={200}
                        priority
                        placeholder="empty"
                      />
                  </button>
                </Link>
              </div>
              <div>
                <Link href="/info">
                  <button className={styles.optionSelectorButton}>Mint
                    <Image 
                      src="/images/mint.png" 
                      alt="Mint" 
                      width={200} 
                      height={200}
                      priority
                      placeholder="empty"
                    />
                  </button>
                </Link>
              </div>
              <div>
                <Link href="/info">
                  <button className={styles.optionSelectorButton}>Roadmap
                    <Image 
                      src="/images/roadmap.png" 
                      alt="Roadmap" 
                      width={200} 
                      height={200}
                      priority
                      placeholder="empty"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default MiPagina;

