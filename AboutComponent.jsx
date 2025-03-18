import React, { useState } from 'react';
import './AboutStyles.css';
import about_img from '../../assets/image10.jpg';
import play_icon from '../../assets/play-icon.png';

const AboutComponent = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className='about'>
      <div className="about-left">
        {isVideoPlaying ? (
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/vWp94-7umyQ?autoplay=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        ) : (
          <>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={handlePlayVideo} />
          </>
        )}
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>At our educational platform, we are committed to fostering a vibrant community of learners, educators, and enthusiasts alike. Whether you're a student seeking to expand your knowledge, an educator looking for innovative teaching resources, or a curious mind eager to explore new horizons, you'll find a wealth of opportunities here. Our platform offers a diverse range of courses, interactive learning materials, and collaborative spaces designed to inspire and empower individuals of all ages and backgrounds.</p>
        <p> Step into a world of endless possibilities where learning knows no bounds. With our extensive catalog of courses covering a multitude of subjects, from STEM disciplines to humanities, arts, and beyond, you'll find the perfect learning journey tailored to your interests and aspirations. Engage with expert instructors, dive into hands-on projects, and connect with fellow learners from around the globe. Whether you're embarking on a new career path, honing your skills, or simply satisfying your curiosity, our platform provides the tools and resources you need to succeed.</p>
        <p> Join a thriving community of learners united by their passion for knowledge and discovery. As part of our educational ecosystem, you'll have access to a supportive network of peers, mentors, and industry professionals eager to share their expertise and insights. Participate in discussions, collaborate on projects, and exchange ideas with like-minded individuals who share your thirst for learning. Together, we'll embark on a journey of exploration, growth, and transformation, unlocking new opportunities and shaping the future of education.</p>
      </div>
    </div>
  )
}

export default AboutComponent;
