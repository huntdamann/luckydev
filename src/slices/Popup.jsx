"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'

import Title from '../../public/assets/new_word.png'
import React, { forwardRef } from "react";



import Lucky from '../../public/assets/lucky-logo-demo.png'
import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const Popup = ({ refPop, refOut, refNo, setter}) => {







    return(

        <>

            {/* Pop up Container */}
            <div id="popup-container" ref={refPop} className="border text-black bg-[#51B150] gap-[3rem] ml-4 mr-6 text-center  rounded-xl absolute p-[3rem] justify-between  items-center z-[1000]   border-green-700 flex flex-row min-h-[20rem] top-[10%] left-[50%]">

                <div className="image">
                    IMAGE GOES HERE 
                </div>


                <div className="flex flex-col text-center items-center justify-center gap-3">


                <Image alt='Picture' src={Lucky} width={300} height={150}></Image>
                <Image className="" id="secondlogo" alt="Lucky Leperchaun Logo" width={150} src={Lucky2} />
                <Image className="" id="title-one" alt="We're Brewing Something Special" width={350} src={Title} />


                <span className="w-[16rem] font-mono">
                    Join the Lucky list and be entered for a chance to win <span className="text-honeygold font-bold">$50!</span>  

                </span>

                <div className="border flex bg-white justify-between w-[15rem] rounded-md">
                    <span>Email Here</span>
                    <div>
                        <span className="bg-green-300 rounded-tl-md rounded-bl-md">Button</span>
                    </div>
                </div>

                <span>Winner will be anounced on ___</span>

                

                <div className='triangle'></div>



                </div>



                 {/* Dark Overlay */}
           
            </div>

            
           

        
        
        
        </>



    )






}

export default Popup;