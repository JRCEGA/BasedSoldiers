import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState, ReactNode } from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

type LayoutProps = {
    children: ReactNode;
  };

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Based Soldiers</title>
      </Head>
        <div className="mainHeader">
          <div>
            <Link href="/">
              <h1 id="mainHeaderTitle">Based Soldiers</h1>
            </Link>
            <div className="walletConnectButton">
              <ConnectButton />
            </div>
          </div>
        </div>
        {children}
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
    </>
  );
};

export default Layout;

