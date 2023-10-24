import Hero from "./Hero"

const About = () => {
  return (
    <>
      <Hero text='About us' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              consequatur accusantium nam deleniti cupiditate illum, voluptatum
              accusamus deserunt, facilis perferendis tempora dolorem harum
              laudantium quaerat atque placeat incidunt, voluptate inventore.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default About
