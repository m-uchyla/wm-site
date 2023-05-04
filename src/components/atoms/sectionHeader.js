

export default function SectionHeader({header, subheader}) {

    return (
      <div className="text-center sm:mb-16 mb-10">
          <h2 className="md:text-[50px] text-[32px] font-semibold leading-none">{header}</h2>
          {(subheader ?
            <h3 className="text-secondaryText md:text-[20px] text-[18px] font-regular mt-2">{subheader}</h3>
             : "")}
      </div>
    )
}