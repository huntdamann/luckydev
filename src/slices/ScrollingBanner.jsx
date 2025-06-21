"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;
import { useInView } from 'react-intersection-observer'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import React, { forwardRef, useEffect } from "react";



import Clover from '../../public/assets/clover-clip.png'
import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const ScrollingBanner = () => {




    const { ref , inView , entry } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    useEffect(() => {
            if (!inView) return;
    
            console.log('Newsletter Section in View')
            gsap.to('#quote', {opacity: 1});

        }, [inView])
    
    return(

        <>

        {/* 
      <SocialPanel realCount={100} />
      <section className="banner-container">
        <div className="banner">
          <div className="banner-content">
            <div className="flex gap-3 items-center">
            <span>Get Lucky!</span>
            <FontAwesomeIcon className="text-green-600" icon={faClover} />


            </div>
            <div>
              <span>Try our Honey Gold Flavor</span>
            </div>
          </div>

                                                      
        </div>
      </section>

      <Newsletter /> */}
      <section className="lg:mt-[46px] mt-[57px] w-[100vw] max-w-[100%] overflow-x-clip">

            <div className="lg:px-[50px] px-[60px] relative">
                <h1 className="text-center font-juju lg:mb-[488px] mb-[47px] mt-[60px] lg:mt-[50px] whitespace-pre-line">Get Lucky
                </h1>
                <div className=" lg:w-[832px] lg:h-[280px] h-[366px]"></div>
                <div className="absoulte left-0 right-0 lg:bottom-[85px] bottom-0 lg:h-[628px] h-[366px]">
                    <div className="w-[100dvw] overflow-hidden">
                        <div className="flex flex-row overflow-hidden" draggable="false" id="scroll-banner">
                            <div id="scroll-content" className="flex flex-row gap-3">
                                <div className="lg:mr-[80px] mr-[30px] lg:mt-[calc(calc(var(--mtr)*60px)+60px)] mt-[calc(calc(var(--mtr)*20px)+20px)]">
                                    <div id="item-scroll" className="lg:w-[146px] w-[97px] aspect-square border border-green-500 rounded-full drop-shadow-esg bg-blue-500 bg-opacity-60 flex flex-col items-center justify-center ">
                                        <span>
                                            Flavor Focused
                                        </span>
                                    </div>
                                    <div className="vertical-line"></div>

                                    <div className=" w-[2px] lg:h-[374px] h-[200px] mx-auto lg:mt-[22px] mt-[5px]"></div>
                                </div>
                                <div className="lg:mr-[80px] mr-[30px] lg:mt-[calc(calc(var(--mtr)*60px)+60px)] mt-[calc(calc(var(--mtr)*20px)+20px)]">
                                    <div id="item-scroll" className="lg:w-[146px] w-[97px] aspect-square border rounded-full drop-shadow-esg bg-blue-500 bg-opacity-60 flex flex-col items-center justify-center ">
                                        <span>
Community-Driven                                        </span>
                                    </div>
                                     <div className="vertical-line"></div>

                                    <div className=" w-[2px] lg:h-[374px] h-[200px] mx-auto lg:mt-[22px] mt-[5px]"></div>
                                </div>
                                <div className="lg:mr-[80px] mr-[30px] lg:mt-[calc(calc(var(--mtr)*60px)+60px)] mt-[calc(calc(var(--mtr)*20px)+20px)]">
                                    <div id="item-scroll" className="lg:w-[146px] w-[105px] aspect-square border border-green-500 rounded-full drop-shadow-esg bg-blue-500 bg-opacity-60 flex flex-col items-center justify-center ">
                                        <span>
100% Real Tea                                        </span>
                                    </div>
                                    <div className="vertical-line"></div>

                                    <div className=" w-[2px] lg:h-[374px] h-[200px] mx-auto lg:mt-[22px] mt-[5px]"></div>
                                </div>
                                <div className="lg:mr-[80px] mr-[30px] lg:mt-[calc(calc(var(--mtr)*60px)+60px)] mt-[calc(calc(var(--mtr)*20px)+20px)]">
                                    <div id="item-scroll" className="lg:w-[146px] w-[97px] aspect-square border border-green-500 rounded-full drop-shadow-esg bg-blue-500 bg-opacity-60 flex flex-col items-center justify-center ">
                                        <span className="text-white">
Locally-Sourced                                        </span>
                                    </div>
                                    <div className="vertical-line"></div>

                                    <div className=" w-[2px] lg:h-[374px] h-[200px] mx-auto lg:mt-[22px] mt-[5px]"></div>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
      </section>
        


        
        
        
        </>



    )






}

export default ScrollingBanner;
