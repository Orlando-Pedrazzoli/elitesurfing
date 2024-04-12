import { useEffect, useRef } from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import video_bg from '../Assets/pastori-video.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust the playback rate as needed (e.g., 0.5 for half speed)
    }
  }, []);
  return (
    <div className='hero'>
      <div className='video-background'>
        <video ref={videoRef} autoPlay loop muted>
          <source src={video_bg} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='hero-content'>
        <div className='hero-left'>
          <h2>FREE SHIPPING!</h2>
          <div>
            <div className='hero-hand-icon'>
              <p>Elite Surfing</p>
            </div>
            <p>high performance</p>
            <p>surf traction</p>
          </div>
          <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
