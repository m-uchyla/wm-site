import { SectionHeader } from "@/components"
import { testimonials } from "@/constants";
import Image from 'next/image'

export default function Testimonials(){
    return(
        <section id="testimonials">
            <SectionHeader header={"Co się o nas mówi?"} subheader={"Opinie naszych klientów i osób z którymi współpracowaliśmy"} />
            <div className="flex gap-3 flex-col md:flex-row">
            {testimonials.map((testimonial, index) => (
                <div key={"testimonial"+index} className="flex-center flex-col text-center">
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
        </section> 
    );
}