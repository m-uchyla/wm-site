import { portfolio } from '../../constants'
import { SectionHeader } from "@/components"
import { motion } from "framer-motion"

export default function Portfolio () {
    return (
    <section id="portfolio">
      <SectionHeader header={"Wybrane realizacje"} subheader={"Sprawdź jak wyglądają przygotowane przez nas strony"} />
      <div className='flex flex-col xl:flex-row flex-wrap xl:place-content-between place-content-center gap-y-7'>
      {portfolio.map((p, index) => (
        <motion.div 
        key={"portfolio"+index}
        className="flex-1"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0, }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: index === 0 ? 0.3 : index === 1 ? 0.5 : 0.7, duration: 1 }}
        >
            <div className='md:w-[550px] sm:w-[450px] w-[250px]'>
            <div className='portfolio-container  cursor-pointer'>
                <a href={p.link} target='_blank' rel='nofollow'>
                {/* <img src={p.img} alt={p.title} className='border-2 border-[#34333b] portfolio-image' /> */}
                <img 
                    className="rounded-xl portfolio-image"
                    src={p.img}
                    alt={p.title}
                />
                <div
                className='portfolio-desc p-4 bg-card rounded-xl'>
                    <h3 className='text-[28px] font-semibold'>{p.title}</h3>
                    <p className='my-2 text-secondaryText'>{p.desc}</p>
                    <p className='mb-2 text-primary font-semibold'>Zobacz więcej</p>
                </div>
                </a>
            </div>
            </div>
        </motion.div>
      ))}
      </div>
    </section>
    )
}