import './VideoSection.css';
import './Utilities.css';
import React from 'react';

function VideoSection() {

        return (
            <div className='hero-container'>
              <video src='/videos/video-2.mov' autoPlay loop muted />
            </div>
          );
  }

  export default VideoSection