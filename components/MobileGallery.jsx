"use client"

import Image from "next/image";
import iphone1 from '../puplic/images/iphone_01.png'
import iphone2 from '../puplic/images/iphone_02.png'
import iphone3 from '../puplic/images/iphone_03.png'
import iphone4 from '../puplic/images/iphone_04.png'
import iphone5 from '../puplic/images/iphone_05.png'
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
const MobileImages =[
    {src: iphone1, title: "iPhone 1", speed:10},
    {src: iphone2, title: "iPhone 2", speed:20},
    {src: iphone3, title: "iPhone 3", speed:10},
    {src: iphone4, title: "iPhone 4", speed:20},
    {src: iphone5, title: "iPhone 5", speed:10},
]


export default function MobileGallery() {
  return (
<ParallaxProvider >

    <div className="flex gap-10 mx-auto
    justify-center align-middle overflow-hidden
    h-[26rem] max-w-[1600px]
    ">
        {
            MobileImages.map(({src, title,speed}, index) => (
                
                <Parallax  key={index} speed={speed}>

                    <Image src={src} alt={title} altwidth={300} height={400} />
                </Parallax>
            )
            
            
        ) 
    }

    </div>
    </ParallaxProvider>
  )
}
