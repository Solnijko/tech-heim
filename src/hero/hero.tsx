import './hero.css'
import '../index.css'

function Hero() {
    return (
      <>
        <section className="hero">
            <div className="hero-top">
                <h1 className="main-title">Tech Heim</h1>
                <p className="hero-text">"Join the <span className='orange-text'>digital revolution</span>"</p>
            </div>
            <a href="#" className="button orange-button"> Explore More </a>
        </section>
      </>
    )
  }
  
  export default Hero
  