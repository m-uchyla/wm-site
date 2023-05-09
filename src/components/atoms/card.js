

export default function Card(props) {
    return (
      <div className={`${props.className} sm:p-10 p-6 bg-card rounded-xl shadow-2xl flex-1`}>
        {props.children}
      </div>
    )
}