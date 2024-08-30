"use client";  
import "../styles/style.css"

import Image from "next/image";
import Head from 'next/head';
import React from 'react';


import home from "../images/1.png";
import about from "../images/2.png";
import tokenomic from "../images/3.png";
import howToBuy from "../images/4.png";
import faq from "../images/5.png";
import followUs from "../images/6.png";

import bannerTitle from "../images/banner_title.png";
import button from "../images/button.png";
import welcomeTitle from "../images/welcome_title.png";
import welcomeIcon from "../images/welcome_icon.png";

import headerHome from "../images/h_home.png";
import headerAbout from "../images/h_about.png";
import headerFeatures from "../images/h_features.png";
import headerFollow from "../images/h_follow.png";
import headerFaq from "../images/h_faq.png";

import contentAboutDesktop from "../images/content_about_desktop.png";
import contentFeaturesDesktop from "../images/content_features_desktop.png";
import contentHowDesktop from "../images/content_how_to_buy_desktop.png";
import contentFaqDesktop from "../images/content_faq_desktop.png";



export default function Home() {
 
  
  return (
    
    <main className="bg-black flex flex-col">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="header flex flex-row m-auto gap-20 pt-10">
        <a href="#home">
          <p style={{ fontFamily:'PR-Columban demo' }}>HOME</p>
        </a>
        <a href="#about">
          <p style={{ fontFamily:'PR-Columban demo' }}>ABOUT</p>
        </a>
        <a href="#tokenomic">
          <p style={{ fontFamily:'PR-Columban demo' }}>TOKENOMICS</p>
        </a>
        <a href="#how_to_buy">
          <p style={{ fontFamily:'PR-Columban demo' }}>HOW TO BUY</p>
        </a>
        <a href="#faq">
          <p style={{ fontFamily:'PR-Columban demo' }}>FAQ</p>
        </a>
        <a href="#follow_us">
          <p style={{ fontFamily:'PR-Columban demo' }}>FOLLOW US</p>
        </a>
      </div>


      <div className="content gap-20 flex flex-col">

        <div id="home" className="home relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${home.src})` }}>
          <div className="flex flex-col">
            <Image
              src={welcomeTitle}
              className="self-center"
            />
            <Image
              src={bannerTitle}
              className="self-center"
            />
            <p className="self-center" style={{ fontFamily: "PR-Columban demo", fontSize:25 }}>Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum </p>
            <Image
              className="self-center cursor-pointer"
              src={button}
            />
            <a 
              href="#about"
              className="self-center "

            >
              <Image
                src={welcomeIcon}
              />
            </a>
          </div>
        </div>


        <div id="about" className="home relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${about.src})`,  filter: 'opacity(0.8)'}}>
          <div className="items-start -ml-[200] md:-ml-[300px] lg:-ml-[400px] xl:-ml-[890px] mt-[100px] w-[400px] lg:w-[480px] relative flex flex-col">
            <h2 className="text-3xl lg:text-6xl" style={{ fontFamily:'PR-Columban demo',  }}>About</h2>
            <h2 className=" text-6xl lg:text-9xl" style={{ fontFamily:'PR-Columban demo',}}>YORAN</h2>
            <p>Lorem ipsgen spatie  ipsum Laravel ipsum Lorem ipsum yoranm Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumyoran Lorem ipsum Lorem ipsum Lorem general Lorem ipsum knife ipsum about  Lorem ipsum generate ipsum Lorem yoran Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipgeneratorem ipsum Lorem ipsum Lorem about Lorem ipsum Lorem ipsum Lorem ipsum Lorem how to ipsum Lorem ipsum Lorem ipsyoranLorem ipsum </p>
          </div>
        </div>


        <div id="tokenomic" className="home relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${tokenomic.src})` ,filter: 'opacity(0.8)'}}>
          <Image
              className="relative mt-[700px]"
              src={contentFeaturesDesktop}
              alt="Next.js Logo"
            />
        </div>
        

        <div id="how_to_buy" className="home relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${howToBuy.src})` ,filter: 'opacity(0.8)'}}>
          <Image
              className="relative mt-[700px]"
              src={contentHowDesktop}
              alt="Next.js Logo"
            />
        </div>


        <div id="faq" className="home relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${faq.src})` ,filter: 'opacity(0.8)'}}>
          <Image
            className="relative mt-[400px] -ml-[1100px]"
            src={contentFaqDesktop}
            alt="Next.js Logo"
          />
        </div>


        <div id="follow_us" className="home relative flex items-center justify-center h-screen bg-cover bg-center w-full" style={{ backgroundImage: `url(${followUs.src})`, filter: 'opacity(0.8)'}}>
          
        </div>
       


      </div>

    </main>
  );
}
