"use client"

import React, {useRef, useEffect, useState} from "react";



export default function PaperContainer ({
  
children, 
}: Readonly<{
  children: React.ReactNode
}>) {


    const windowRef = useRef<HTMLDivElement | null>(null);
    const paperFrontRef = useRef<HTMLDivElement | null>(null);

    const [pageHeight, setPageHeight] = useState(0);

    const [open, setOpen] = useState(false);
    const offset = 1800
    const [close, setClose] = useState(false);
      
      // Update transform origin
    const updateTransformOrigin = () => {
        if (!windowRef.current || !paperFrontRef.current) return;
      
        const scrollTop = windowRef.current.scrollTop;
        const pageHeight = paperFrontRef.current.offsetHeight;
        console.log(pageHeight)
        const equation = ((scrollTop + offset) / pageHeight) * 100;
      
        paperFrontRef.current.style.transformOrigin = `center ${equation}%`;
        };
      
        useEffect(() => {
          updateTransformOrigin(); // initial calcualtion
        })

const openMenu = () => {

    if (paperFrontRef.current) {
        const height = paperFrontRef.current.offsetHeight;
        setPageHeight(height);
        console.log(height);
    }
    setOpen(true);
    setClose(false)
    console.log('opening....');

  }
const closeMenu = () => {
    setOpen(false);
    setClose(true);
    console.log('closing....');

  }
    return (

      <>
        
        <div id="paper-window" ref={windowRef} className={open? 'tilt' : ''}>
            <div style={{
          color: "white"
        }} onClick={close? openMenu: closeMenu} className="close"></div>
            <div ref={paperFrontRef} id="paper-front">
            <div onClick={open ? closeMenu : openMenu} className="hamburger"><span></span></div>

                {children}

            </div>


        </div>

        </>
    )
}