import React from 'react';

const Contact = () => {
  return (
    <div className='contact-container'>
     <h1 className='text-center'>CONTACT US</h1>
     <div className="custom-hr-container">
  <hr className="custom-hr" />
</div>

<div className="content">
<h4 className='text-center'>Find more ways to help!</h4>
  
  <p style={{margin:0}}> <span>A nonprofit is as strong as the community that holds it up. Together, we can do more than we can do alone. Let's bring our abilities and passions together to affect real change.
  </span></p>
  <br></br>
  <p style={{margin:0}}><span></span></p>
  <p style={{margin:0}}> <span>There are many ways to join us and support our mission. Contact us to find out more about social contributions, medical reseearch, volunteer opportunities and other ways that you can get  our message to your friends and family.
  </span></p>
  <br></br>
  <br></br>
  <h4 className='text-center'>Usha Renal Care Foundation</h4>
 </div>
 <div className="subscribe-div">
  <h1>SUBSCRIBE</h1>
  <p>Learn more about our upcoming events, fundraisers, and more!</p>
  <div className="subscribe-form">
    <input type="email" className='email-input' placeholder="Enter your email address" />
    <button className="subscribe-button">SUBSCRIBE</button>
  </div>
</div>

    </div>
  );
};

export default Contact;
