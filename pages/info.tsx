import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import styles from '../styles/infoScreen.module.css'

const infoScreen = () => {
  return (
    <>
      <div className="mainMenuContainer">
        <div id="introOptions">
          <h1 id="menuPhrase">ARMY strong. BASED in bravery. Built by SOLDIERS.</h1>
          <div className="optionsUI">
            <div className="optionSelectorUI">
              <div className="optionHome">
                <Link href="/about">
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
                </Link>
              </div>
              <div className="optionMint">
                <Link href="/mint">
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
                </Link>
              </div>
              <div className="optionRoadmap">
                <Link href="/roadmap">
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
                </Link>
              </div>
            </div>
            <div id="separationBar"></div>
            <div className="contentScreen">
              <div className="contentScreenText">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default infoScreen;

