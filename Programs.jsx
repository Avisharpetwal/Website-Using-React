// Import React
import React from 'react';

// Import the CSS file separately
import './Programs.css';

// Import images
import Program_1 from '../../assets/image1.jpg';
import Program_2 from '../../assets/image7.jpg';
import Program_3 from '../../assets/image3.jpg';

//import program icons
import Program_icon_1 from '../../assets/program-icon-1.png';
import Program_icon_2 from '../../assets/program-icon-2.png';
import Program_icon_3 from '../../assets/program-icon-3.png';

// Define the Programs component
const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={Program_1} alt="" />
        <div className="caption">
            <img src={Program_icon_1} alt="" />
            <p>Graduation degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program_2} alt="" />
        <div className="caption">
            <img src={Program_icon_2} alt="" />
            <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program_3} alt="" />
        <div className="caption">
            <img src={Program_icon_3} alt="" />
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

// Export the Programs component
export default Programs;
