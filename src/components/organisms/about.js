import { about } from "@/constants";


export default function About() {
    return (
      <section>
        <h2 className='text-primaryText md:text-[58px] text-[54px] font-semibold mb-3 text-center'>
          Ty prowadź swój biznes, <br className='sm:block hidden'/> {" "}
          My zajmiemy się stroną.
        </h2>
        <div className="flex justify-between pt-16">
        {about.map((elem, index) => (
          <div className="max-w-[325px] flex flex-col items-center ">
            <div className="bg-blue-gradient w-[60px] h-[60px] opacity-75 rounded-full">
            </div>
            <h2 className="text-[24px] font-bold">{elem.title}</h2>
            <p className="text-[16px] text-secondaryText text-center">{elem.description}</p>
          </div>
        ))}
        </div>
      </section>
    )
  }