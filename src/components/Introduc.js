import './Introduc.css';
import './Utilities.css';
import React from 'react';

function Introduc() {

    return (
    <>
      <section className="introduc">
        <div className="introduc-card">
          <div className="circle"></div>
          <div className="content">
            <h2>Tamás Floch</h2>
            <p>Introduc</p>
          </div>
          <img src={require('./images/csokesz.png')} alt="" />
        </div>
        <div className="introduc-card">
          <div className="circle"></div>
          <div className="content">
            <h2>Norbert Urban</h2>
            <p>Introduce</p>
          </div>
          <img src={require('./images/norfli.png')} alt="" />
        </div>
      </section>
    </>
    );
  }

  export default Introduc