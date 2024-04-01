// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import DownloadIcon from "@mui/icons-material/Download";

import Slider from "./Slider";
import Review from "./Reviews";

const Home = () => {
  
    return (
        <>
            <div className="background">
                <div className="text-box">
                    <h1>Baker Points</h1>
                    <p>A bakery is an establishment that produces and sells flour-based food <br /> baked in an oven such as bread, cookies, cakes,<br /> donuts, pastries, and pies.</p>
                    <a href="#" className="btn_home">Visit Us To Know More</a>
                </div>
            </div>
            <section className="Product">
                <h1>Our Products</h1>
                <p>Never trust anyone who skips dessert. Pastries are edible love. Relax, this  a life and death situation. just dessert!</p>
                <div className="row">
                    <div className="product-col">
                        <img src="image/7.webp" alt="" />
                        <div className="layer">
                            <h3>Black Forest</h3>
                        </div>
                    </div>
                    <div className="product-col">
                        <img src="image/2.webp" alt="" />
                        <div className="layer">
                            <h3>Vanilla</h3>
                        </div>
                    </div>
                    <div className="product-col">
                        <img src="image/3.webp" alt="" />
                        <div className="layer">
                            <h3>Dark Chocolate</h3>
                        </div>
                    </div>
                    <div className="product-col">
                        <img src="image/9.jpeg" alt="" />
                        <div className="layer">
                            <h3>Pineapple</h3>
                        </div>
                    </div>
                    <div className="product-col">
                        <img src="image/13.webp" alt="" />
                        <div className="layer">
                            <h3>Strawberry</h3>
                        </div>
                    </div>
                    <div className="product-col">
                        <img src="image/5.webp" alt="" />
                        <div className="layer">
                            <h3>Vanilla Pink</h3>
                        </div>
                    </div>
                </div>
            </section>
            <Review/>
            <section className="choose">
                <h1>Why Recommended You</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
                <div className="choose-box">
                    <div className="choose-box1">
                        <h1>Experienced Staff</h1>
                        <div className="choose-desc">
                            <div className="choose-descText">
                                <p>At Crozzo, we aim to change pre-existing notions about how bakery products are consumed in India.</p>
                            </div>
                        </div>
                        <h1>Good Services</h1>
                        <div className="choose-desc">
                            <div className="choose-descText">
                                <p>Manufacturing and packaging technology, we are able to provide an authentic French croissant right at your doorstep.</p>
                            </div>
                        </div>
                    </div>
                    <div className="choose-img">
                        <img src="https://images.pexels.com/photos/4109996/pexels-photo-4109996.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    </div>
                </div>
            </section>
            {/* <section className="review">
                <h1>What About Customer Says</h1>
                <p>Your customers will love this super-friendly online ordering. It comes built-in and most importantly, it’s free of charge.</p>
                <div className="row">
                    <div className="review-col">
                        <img src="image/user1.webp" alt="" />
                        <div>
                            <p>I just wanted to say that the cake went beyond expectations and it really was the centre of my daughters first birthday celebrations. Not only was the decoration exquisite, the sponge was so moist.</p>
                            <h3>Senojina Charlie</h3>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star-half"></i>
                        </div>
                    </div>
                    <div className="review-col">
                        <img src="image/user2.jpeg" alt="" />
                        <div>
                            <p>Your creativity and artistry really made my party-meal special and I would certainly recommend you to all of my friends without hesitation. Rest assured that we will definitely be using your services to plan future family celebrations.</p>
                            <h3>Martin Byer</h3>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bx-star"></i>
                        </div>
                    </div>
                </div>
            </section> */}
         <Slider/>
        
            <section>
            <div className="container6">
        <div className="box6">
          <div className="box6_1">
            <div className="box6_2">
              <div className="box6_3"></div>
            </div>
          </div>
        </div>
        <div className="imagesContainer">
 <section className="cta">
                <h1>Enroll For Our Various Product <br/>Anywhere From The World</h1>
                <a href="" className="btn_home">CONTACT US</a>
            </section>
        </div>
      </div>
            </section>
        </>
    );
};

export default Home;
