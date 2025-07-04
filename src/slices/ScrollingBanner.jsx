"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;
import { useInView } from 'react-intersection-observer'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import React, { forwardRef, useEffect, useRef } from "react";



import Clover from '../../public/assets/clover-clip-art.png'
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
                
                <div className=" lg:w-[832px] lg:h-[280px] h-[366px]"></div>
                <div className="absoulte left-0 right-0 lg:bottom-[85px] bottom-0 lg:h-[628px] h-[366px]">
                    <div className="w-[100dvw] overflow-hidden">
                        <div className="flex w-full border flex-row overflow-hidden" draggable="false" id="scroll-banner">
                            <div  id="scroll-content" className="flex  w-full flex-row gap-3">
                              <ul>
                                <div id="clover-container" className="relative">
                                    <li onMouseEnter={() => handleMouseEnter(0)}  className="">
                                        <span id="descriptive-text-heading">
                                            Flavor-Focused
                                        </span>
                                        {/* <span key={0} ref={addToRefs} className="text-sm min-w-[30px] border" id="descriptive-text-caption">
                                            Our tea puts an emphasis on flavor!
                                        </span> */}
                                    </li>
                                    <Image className="image" src={Clover} width={40}  />
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
