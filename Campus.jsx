import React from 'react';
import './Campus.css'; // Import CSS file
import gallery_1 from '../../assets/image9.jpg';
import gallery_2 from '../../assets/image11.jpg';
import gallery_6 from '../../assets/image24.jpg';
import gallery_8 from '../../assets/image23.jpg';
import white_arrow from '../../assets/white-arrow.png';

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_6} alt="" />
        <img src={gallery_8} alt="" />
      </div>
      <button className='btn dark-btn' >See More <img src={white_arrow} alt="" /></button>
    </div>
  );
}

export default Campus;
