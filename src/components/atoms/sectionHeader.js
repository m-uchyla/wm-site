

export default function SectionHeader({header, subheader}) {

    return (
      <div className="text-center mb-16">
          <h2 className="text-[50px] font-semibold">{header}</h2>
          <h3 className="text-secondaryText text-[20px] font-regular">{subheader}</h3>
      </div>
    )
}