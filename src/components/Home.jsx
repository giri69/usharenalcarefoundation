import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import footImg from "./foot-image.jpg"
// import "./home.css"
const Home = () => {
  const [expandedImage, setExpandedImage] = useState("");
  const [imageText, setImageText] = useState("");

  const handleImageClick = (src, alt) => {
    setExpandedImage(src);
    setImageText(alt);
  };

  const handleCloseClick = () => {
    setExpandedImage("");
    setImageText("");
  };

  return (
    <div>
      <div className='about-us'>
      <h1 className='text-center'>ABOUT US</h1>
      <div className="custom-hr-container">
  <hr className="custom-hr" />
</div >
      <p className='text-center'>Decentralised Community for Renal/Kidney Care</p>
      </div>

 <div className="container">
  <div className="row">
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Our Community</h5>
          <p className="card-text">We are building a Community for Renal Care to empower one another towards an improved ecosystem for Kidney Patients, Nephrologists & Researchers.</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Our History</h5>
          <p className="card-text">Last 13 years, we fought the challenges of Renal Failure & understand the experiences of Families & Patients.</p>
        </div>
      </div>
    </div>
    <div className="col-md-12 col-lg-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Our Mission</h5>
          <p className="card-text">URCF brings the momentum to help improve the innovations in Renal Care. Using data-driven models, we provide solutions that make a long-lasting difference.</p>
        </div>
      </div>
    </div>
  </div>
</div>


<div>
  <div className="row">
    <div className="column">
      <img src={img1} alt="Nature" onClick={() => handleImageClick(img1, "1")} />
    </div>
    <div className="column">
      <img src={img2} alt="Snow" onClick={() => handleImageClick(img2, "2")} />
    </div>
    <div className="column">
      <img src={img3} alt="Mountains" onClick={() => handleImageClick(img3, "3")} />
    </div>
  </div>
  <div className="row">
    <div className="column">
      <img src={img4} alt="Nature" onClick={() => handleImageClick(img4, "4")} />
    </div>
    <div className="column">
      <img src={img5} alt="Snow" onClick={() => handleImageClick(img5, "5")} />
    </div>
    <div className="column">
      <img src={img6} alt="Mountains" onClick={() => handleImageClick(img6, "6")} />
    </div>
  </div>

  <div className="image-container">
    {expandedImage && (
      <div className="expanded-container">
        <span className="closebtn" onClick={handleCloseClick}>&times;</span>
        <img id="expandedImg" src={expandedImage} alt={imageText} />
        <div id="imgtext">{imageText}</div>
      </div>
    )}
  </div>
</div>
<div className="subscribe-div">
  <h1>STAY IN TOUCH</h1>
  <p>Sign up to hear from us about impact, research, and events.</p>
  <div className="subscribe-form">
    <input type="email" className='email-input' placeholder="Enter your email address" />
    <button className="subscribe-button">SUBSCRIBE</button>
  </div>
</div>
<div className='foot-image'>
<img  src={footImg} alt=''/>
</div>
    </div>
  );
};

export default Home;
