import React, { useRef } from 'react';
import './Test.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.jpg';
import user_2 from '../../assets/user-2.jpg';
import user_3 from '../../assets/user-3.jpg';
import user_4 from '../../assets/user-4.jpg';

const Test = () => {

//FUNCTION FOR SLIDING THE TESTIMONIALS
const slider = useRef();
let tx=0;
  const slideForward = ()=>{
    if(tx>-50)
    {
      tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = ()=>{
    if(tx<0)
    {
      tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }



  return (
    <div className='test'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li key="user1">
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Studying at Edusity has been an enlightening journey for me. The platform offers a seamless learning experience, with its user-friendly interface and diverse range of courses catering to various interests and career paths. The instructors are experts in their fields, providing comprehensive insights and guidance every step of the way. The flexibility of scheduling allows me to balance my studies with other commitments, making it convenient to pursue my educational goals. Edusity has truly empowered me to expand my knowledge and skills, enabling me to thrive both academically and professionally. I highly recommend it to anyone seeking quality online education</p>
            </div>
          </li>
          <li key="user2">
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Studying at Edusity has been an enlightening journey for me. The platform offers a seamless learning experience, with its user-friendly interface and diverse range of courses catering to various interests and career paths. The instructors are experts in their fields, providing comprehensive insights and guidance every step of the way. The flexibility of scheduling allows me to balance my studies with other commitments, making it convenient to pursue my educational goals. Edusity has truly empowered me to expand my knowledge and skills, enabling me to thrive both academically and professionally. I highly recommend it to anyone seeking quality online education</p>
            </div>
          </li>
          <li key="user3">
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Studying at Edusity has been an enlightening journey for me. The platform offers a seamless learning experience, with its user-friendly interface and diverse range of courses catering to various interests and career paths. The instructors are experts in their fields, providing comprehensive insights and guidance every step of the way. The flexibility of scheduling allows me to balance my studies with other commitments, making it convenient to pursue my educational goals. Edusity has truly empowered me to expand my knowledge and skills, enabling me to thrive both academically and professionally. I highly recommend it to anyone seeking quality online education</p>
            </div>
          </li>
          <li key="user4">
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Studying at Edusity has been an enlightening journey for me. The platform offers a seamless learning experience, with its user-friendly interface and diverse range of courses catering to various interests and career paths. The instructors are experts in their fields, providing comprehensive insights and guidance every step of the way. The flexibility of scheduling allows me to balance my studies with other commitments, making it convenient to pursue my educational goals. Edusity has truly empowered me to expand my knowledge and skills, enabling me to thrive both academically and professionally. I highly recommend it to anyone seeking quality online education</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Test;
