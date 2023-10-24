import Hero from "./Hero"

const Home = () => {
  return (
    <>
      <Hero text='Welcome' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className='lead'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              sequi nemo labore natus, autem id tempora nisi error consectetur
              voluptatem, doloremque accusantium eaque voluptate vitae illum
              recusandae distinctio culpa maiores?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
