import './Showcase.css';
import './Utilities.css';
import { Button } from './Button';
import React, { useState, useEffect } from 'react';

function ShowCase() {
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);

    return (
    <>
      <section className="showcase">
        <div className="container grid">
            <div className="showcase-text">
                <h1>Web Development</h1>
                <p>Every Web Developer must have a basic understanding of HTML, CSS, and JavaScri-pt. Responsive Web Design is used in all types of modern web development.
                   (JavaScript 5) is supported in all modern browsers.Take a good look at it, especially the new array functions.</p>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
            <div className="showcase-form card">
                <h2>Request a Quote</h2>
                <form>
                    <div className="form-control">
                        <input type="text" name="name" placeholder="First Name" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="company" placeholder="Last Name" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    {button && <Button buttonStyle='btn--secondary'>Require</Button>}
                </form>
            </div>
        </div>
      </section>
    </>
    );
  }

  export default ShowCase