import { SectionHeader } from "@/components"
import { testimonials } from "@/constants";
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from 'react';

export default function Testimonials(){

    const [itemsInSlider, setItemsInSlider] = useState(3);

    const animation = { duration: 100000, easing: (t) => t }

    const screens= {
        sm: 768,
        md: 1060,
        xl: 1700,
      };

    useEffect(()=>{
        sliderItemsChange(window.screen.width)
        window.addEventListener('resize', function() {
            sliderItemsChange(window.screen.width)
          });
    })

    function sliderItemsChange(screenWidth){
        if(screenWidth > screens.xl){
            setItemsInSlider(3);
        }else if(screenWidth > screens.md){
            setItemsInSlider(2);
        }else{
            setItemsInSlider(1);
        }
    }

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: itemsInSlider,
            spacing: ((itemsInSlider === 3) ? 100 : 50),
          },
        loop: true,
        renderMode: "precision",
        drag: true,
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        }
    });

    return(
        <section id="testimonials">
            <SectionHeader header={"Co się o nas mówi?"} subheader={"Opinie naszych klientów i osób z którymi współpracowaliśmy"} />
            <div className="flex gap-3 flex-col md:flex-row">
            <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
                <div key={"testimonial"+index} className="flex-center keen-slider__slide flex-col text-center">
                    <Image 
                        className="rounded-full"
                        alt={testimonial.name}
                        src={testimonial.img}
                        width={56}
                        quality={75}
                    />
                    <p className="my-3 italic">{testimonial.desc}</p>
                    <h4 className="font-semibold">{testimonial.name} <span className="text-primary">- {testimonial.job}</span></h4>
                </div>
            ))}
            </div>
            </div>
        </section> 
    );
}