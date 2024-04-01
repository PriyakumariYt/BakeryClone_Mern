import React from 'react'

const About = () => {

  return (
    <>
<section className="bakers">
<h1 className={`headingMain tracking-in-expand-fwd `}>Our</h1>
<h2 className='headingMain2'>Bakers</h2>
        <div className="container_baker">
        <div className="baker">
              <img src="image/baker-1.jpg" alt="John Doe" />
              <h5>John Doe</h5>
              <ul className="social-icons">
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="baker">
              <img src="image/baker-2.jpg" alt="John Doe" />
              <h5>SMITH DOE</h5>
              <ul className="social-icons">
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="baker">
              <img src="image/baker-3.jpg" alt="John Doe" />
              <h5>Lina Doe</h5>
              <ul className="social-icons">
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="baker">
              <img src="image/baker-4.jpg" alt="John Doe" />
              <h5>CHRIS DOE</h5>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

     </div>
     </section>
   
     {/* <section className="about">
    <div className="container">
        <div className="row">
            <div className="description padding-right animate-left">
                <div className="global-headline">
                    <h2 className="sub-headline">
                        Read
                    </h2>
                    <h3 className="headline headline-dark">Our Story</h3>
                    <div className="asterisk"><i className="fas fa-asterisk"></i></div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis harum, deserunt repellendus culpa
                    animi minus similique
                    blanditiis repudiandae nisi, explicabo</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic veritatis perferendis molestias
                    eius velit repellendus</p>
            </div>
            <div className="image animate-right">
                <img className="animate-top" src="image/about-img-2.jpeg" alt="bread" />
            </div>
        </div>
    </div>
</section>


      <section className="about">
    <div className="container">
        <div className="row">
            <div className="image padding-right margin-bottom animate-left">
                <img src="image/about-img-1.jpeg" alt="bread" />
            </div>
            <div className="description animate-right">
                <div className="global-headline">
                    <h2 className="sub-headline">
                        Bread
                    </h2>
                    <h3 className="headline headline-dark">So Good</h3>
                    <div className="asterisk"><i className="fas fa-asterisk"></i></div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum dolor earum
                    accusamus suscipit. Officia atque vitae excepturi deserunt nihil?</p>
            </div>
        </div>
    </div>
</section> */}




      <section className='about3rd'>
      {/* <h1 className='headingMain'>Our</h1> */}
    <h1 className={`headingMain tracking-in-expand-fwd `}>Our</h1>
      <h2 className='headingMain2'>Careers</h2>

     <div className="about3rdBox">

{/*     
          <div className="about3rdSmallBox" > */}
          <div className={`about3rdSmallBox roll-out-right`}>
          <img src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> </div>
          <div className="about3rdSmallBox">
            <h2>Join Us</h2>
            <h3>*</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
           </div>
        </div>
      </section>

    </>
  )
}

export default About
