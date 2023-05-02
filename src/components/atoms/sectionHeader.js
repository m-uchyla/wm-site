

export default function SectionHeader({header, subheader}) {

    return (
      <div className="text-center mb-16">
          <h2 className="md:text-[50px] text-[32px] font-semibold">{header}</h2>
          <h3 className="text-secondaryText md:text-[20px] text-[18px] font-regular">{subheader}</h3>
      </div>
    )
}