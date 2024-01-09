import React from 'react';
import CEO from './CEO.jpg';
const More = () => {
    return (
        <div>
        <div className="more-container">
          <div className="image-container">
            <img src={CEO} alt="Imagee"style={{ marginRight: '10px' }} />
          </div>
          <div className="content">
            <p>Our mission of accelerating data connectivity for Access to Health care. At GITEX 2021, we speak about how, we as technologists can contribute to amplify connectivity & save lives.</p>
            <br />
            <p>Join our mission, to connect clinical trials to researchers to patient profiles. Meet our CEO & Founder, Shilpa Karkeraa, at the Dubai World Trade Center (DWTC) on 20th October 2021.</p>
          </div>
         
        </div>
        <div className="button-container">
      <button className="post-button">Post coming soon!</button>
    </div>
         </div>
      );
      
};

export default More;
