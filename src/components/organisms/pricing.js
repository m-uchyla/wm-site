import { pricing } from "@/constants"
import { Card, Button, SectionHeader, MiniCard } from "../index"
import { GoCheck, GoHeart } from "react-icons/go";

export default function Pricing() {

  function hoverList(index, isHovered){
    let elements = document.getElementsByClassName("feature"+index);
    for(let i = 0; i<elements.length; i++){
      elements[i].style.color = (isHovered ? "white" : "");
      elements[i].style.scale = (isHovered ? "1.1" : "");
      elements[i].style.transitionDuration  = "0.5s";
    }
  }

    return (
      <section>
        <SectionHeader header={"Poznaj naszą ofertę"} subheader={"Potrzebujesz strony napisanej od zera? Wybierz coś dla siebie"} />
        <div className="flex lg:flex-row flex-col justify-between gap-5">
          {pricing.map((plan, index) => (
            <Card className={(index==1 ? "border-2 border-primary" : "")}>
              <h4 className="text-[24px] font-semibold xl:h-[40px] h-auto">{plan.title}</h4>
              <p className="text-secondaryText xl:h-[80px]">{plan.desc}</p>
              <div className="h-[60px] md:m-0 mt-4">
                {(plan.discount == 0) ? 
                  <h5 className='xl:text-[30px] text-[25px] font-semibold'><span className="text-secondaryText font-normal xl:text-[20px] text-[16px]">od</span> {plan.price} zł <span className="text-secondaryText font-normal text-[20px]">netto</span></h5> 
                  : 
                  <h5 className='xl:text-[30px] text-[25px] font-semibold'><span className="text-secondaryText font-normal xl:text-[20px] text-[16px]">od</span> <span className='text-cyan-500 line-through '><span className='text-zinc-500'>{plan.price}</span></span> {Math.floor(plan.price * (1-(plan.discount/100)))} zł <span className="text-secondaryText font-normal text-[20px]">netto</span></h5>
                }
              </div>
              <div className="mb-5">
                <Button text="Wybierz" variation={1} />
              </div>
              <div>
                <h6>Plan zawiera:</h6>
                <ul>
                {plan.features.map((feature,index) => (
                  <li key={"feature"+index} onMouseOver={() => hoverList(index, true)} onMouseLeave={() => hoverList(index, false)} className={`${"feature"+index} text-secondaryText flex cursor-default`}><GoCheck className="text-primary mr-2 mt-1"/>{feature.feature}</li>
                ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>
    )
  }