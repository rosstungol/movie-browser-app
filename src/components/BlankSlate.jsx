const BlankSlate = ({ header, body }) => {
  return (
    <div className='Container p-5'>
      <h1 className='hero-text text-center'>{header}</h1>
      <p className='lead text-center'>{body}</p>
    </div>
  )
}

export default BlankSlate
