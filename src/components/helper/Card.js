const Card = ({ children, title }) => {
  return (
    <div className="card-body">
      <h1 className="card-title mb-5">{title}</h1>
      {children}
    </div>
  )
}

export default Card
