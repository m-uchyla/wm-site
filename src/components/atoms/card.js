

export default function Card(props) {
    return (
      <div className={`${props.className} p-10 bg-card rounded-xl shadow-2xl flex-1`}>
        {props.children}
      </div>
    )
}