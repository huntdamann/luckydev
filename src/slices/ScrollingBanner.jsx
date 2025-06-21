"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;
import { useInView } from 'react-intersection-observer'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import React, { forwardRef, useEffect, useRef } from "react";



import Clover from '../../public/assets/clover-clip.png'
import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const ScrollingBanner = () => {



    const liRefs = useRef([])
    liRefs.current = [];

    const addToRefs = (el) => {
        if (el && !liRefs.current.includes(el)) {
            liRefs.current.push(el)
        }
    }

    const handleMouseEnter = (index) => {
        gsap.to(liRefs.current[index], {
            opacity: 1,
            
        })
        console.log('I am hovered')
    }
    const { ref , inView , entry } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    useEffect(() => {
            if (!inView) return;
    
            console.log('Newsletter Section in View')
            gsap.to('#quote', {opacity: 1});

        }, [inView])

    useEffect(() => {
        
    })
    
    return(

        <>
     
      <section className="lg:mt-[46px] mt-[57px] w-[100vw] max-w-[100%] overflow-x-clip">

            <div className="lg:px-[50px] px-[60px] relative">
                <h1 id="scroll-header" className="text-center font-juju lg:mb-[488px] mb-[47px] mt-[60px] lg:mt-[50px] text-green-500 whitespace-pre-line">Get Lucky
                </h1>
                <div className=" lg:w-[832px] lg:h-[280px] h-[366px]"></div>
                <div className="absoulte left-0 right-0 lg:bottom-[85px] bottom-0 lg:h-[628px] h-[366px]">
                    <div className="w-[100dvw] overflow-hidden">
                        <div className="flex flex-row overflow-hidden" draggable="false" id="scroll-banner">
                            <div  id="scroll-content" className="flex flex-row gap-3">
                              <ul>
                                <div>
                                    <li onMouseEnter={() => handleMouseEnter(0)}  className="flex flex-col items-center">
                                        <span id="descriptive-text-heading">
                                            Flavor-Focused
                                        </span>
                                        <span key={0} ref={addToRefs} className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                            Our tea puts an emphasis on flavor!
                                        </span>
                                    </li>
                                    <div className="vertical-line"></div>
                                </div>
                                <div>
                                    <li className="flex flex-col items-center">
                                        <span id="descriptive-text-heading">
                                            Community-Driven
                                        </span>
                                        <span className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                            Lucky cares about the community.
                                        </span>
                                    </li>
                                    <div className="vertical-line"></div>
                                </div>
                                <div>
                                    <li className="flex flex-col items-center">
                                        <span id="descriptive-text-heading">
                                            100% Real Tea
                                        </span>
                                        <span className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                            Tea brewed with authentic green & black tea leaves
                                        </span>
                                    </li>
                                    <div className="vertical-line"></div>
                                </div>
                                <div><li className="flex flex-col items-center">
                                    <span id="descriptive-text-heading">
                                        Locally-Sourced Honey
                                    </span>
                                    <span className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                        Honey used right from the backyard of Dallas, Texas
                                    </span>
                                </li>
                                <div className="vertical-line"></div>
                                </div>
                                 <div><li className="flex flex-col items-center">
                                    <span id="descriptive-text-heading">
                                        % less sugar than Arizona
                                    </span>
                                    <span className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                        Sugar contained in Lucky products are less than other leading brands
                                    </span>
                                </li>
                                <div className="vertical-line"></div>
                                </div>
                                    
                                
                                 
                                 
                                 
                                 
                              </ul>
                              <ul aria-hidden="true">
                                <div>
                                    <li className="flex flex-col items-center">
                                        <span id="descriptive-text-heading">
                                            Flavor-Focused
                                        </span>
                                        <span className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                            Our tea puts an emphasis on flavor!
                                        </span>
                                    </li>
                                    <div className="vertical-line"></div>
                                </div>
                                <div>
                                    <li className="flex flex-col items-center">
                                        <span id="descriptive-text-heading">
                                            Community-Driven
                                        </span>
                                        <span className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                            Lucky cares about the community.
                                        </span>
                                    </li>
                                    <div className="vertical-line"></div>
                                </div>
                                <div>
                                    <li className="flex flex-col items-center">
                                        <span id="descriptive-text-heading">
                                            100% Real Tea
                                        </span>
                                        <span className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                            Tea brewed with authentic green & black tea leaves
                                        </span>
                                    </li>
                                    <div className="vertical-line"></div>
                                </div>
                                <div><li className="flex flex-col items-center">
                                    <span id="descriptive-text-heading">
                                        Locally-Sourced Honey
                                    </span>
                                    <span className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                        Honey used right from the backyard of Dallas, Texas
                                    </span>
                                </li>
                                <div className="vertical-line"></div>
                                </div>
                                 <div><li className="flex flex-col items-center">
                                    <span id="descriptive-text-heading">
                                        % less sugar than Arizona
                                    </span>
                                    <span className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                        Sugar contained in Lucky products are less than other leading brands
                                    </span>
                                </li>
                                <div className="vertical-line"></div>
                                </div>
                                    
                                
                                 
                                 
                                 
                                 
                              </ul>
                               
                                
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
