import React from "react"
import HeroSlider, { Slider } from "hero-slider"


import Aboutus from "../assets/Aboutus.jpg"
import Logo from "../assets/logo.jpg"

export default function ImageSllider() {
    return (
        

            <HeroSlider
             slidingAnimation="left_to_right"
             orientation="horizontal"
             initialSlide={1}
             onBeforeChange={(previousSlide, nextSlide)=> console.log("onBeforeChange",previousSlide, nextSlide)}
            onChange={nextSlide => console.log("onChange", nextSlide) }
            onAfterChange={nextSlide =>console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor:"rgba(0,0,0, 0.33)"
            }}

            settings={{
                slidingDuration:250,
                slidingDelay:100,
                shouldAutoplay:true,
                shouldDisplayButtons:true,
                shouldDuration:5000,
                height:"50vh"

            }}
            >
                <Slider
                    background={{
                        backgroundImage: Aboutus,
                        backgroundAttachment: "fixed"
                    }}
                />

                {/* <Slider
                    background={{
                        backgroundImage: Logo,
                        backgroundAttachment: "fixed"
                    }}
                /> */}
            </HeroSlider>
        
    )
}