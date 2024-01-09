import React, { useState } from 'react';

const Footer = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleIconClick = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values using state or form references
    // Example: const name = e.target.elements.name.value;
    // After processing the form, you can close the form by calling setIsFormVisible(false);
  };

  return (
    <footer>
      {/* Your footer content */}
      <hr />
      <div className="svg-container fixed-svg" onClick={handleIconClick}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="44" height="44" data-ux="Icon" className="x-el x-el-svg c2-1 c2-2 c2-q c2-r c2-s c2-3 c2-4 c2-5 c2-6 c2-7 c2-8">
          <g fill="currentColor">
            <rect x="4" y="6" width="16" height="10.222" rx="1.129"></rect>
            <path d="M8.977 18.578l.2-2.722a.564.564 0 01.564-.523h3.61c.548 0 .774.705.327 1.024l-3.81 2.721a.564.564 0 01-.89-.5z"></path>
          </g>
        </svg>
      </div>
      <p>Copyright © 2023 Usha Renal Care Foundation - All Rights Reserved.</p>
      {isFormVisible && (
        
        <div className="form-popup ">
           <h2 className="form-header">Usha Renal Care Foundation</h2>
          <div className="form-content">
           
            <p className="pop-message">Hi! Let us know how we can help and we'll respond shortly.</p>
            <form onSubmit={handleFormSubmit}>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
              <textarea id="message" name="message" placeholder="How can we help you?" required></textarea>
              <div className="form-buttons">
                <button type="submit" className="send-button">Send</button>
              </div>
              <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
            </form>
            <span className="close-icon" onClick={() => setIsFormVisible(false)}>&times;</span>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
