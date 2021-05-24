import React from 'react'
import './HomePage.css';
import sample from '../img/videos/video-2.mov';

function HomePage() {
    return (
        <div className="homepage">
            <video className='videoTag' autoPlay loop muted>
              <source src={sample} type='video/mp4' />
              </video>
            <div className="typography">
                <h1>Hi, I'm <span>Norbert Urban</span></h1>
                <p>
                    Rövid szöveg rólam.
                </p>
                 {/*<iconfooter>
                  <div class="color"></div>
                  <div class="color"></div>
                  <div class="color"></div>
                    <ul>
                      <li><a href="/#"><i class='fab fa-facebook-f' />
                      </a></li>
                      <li><a href="/#"><i class='fab fa-instagram' />
                      </a></li>
                      <li><a href="/#"><i class='fab fa-twitter' />
                      </a></li>
                    </ul>
                </iconfooter>*/}
            </div>
        </div>
    )
}

export default HomePage;
