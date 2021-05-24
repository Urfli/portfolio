import React from 'react'
import {NavLink} from 'react-router-dom';
import avatar from '../../img/avatar.jpg';
import './Navigation.css';

function Navigation() {
    return (
        <div className="navigationBar">
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <iconfooter>
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
            </iconfooter>
            <footer className="footer">
                <p>@CopyRight <b>Urfloé</b></p>
            </footer>
        </div>
    )
}
 
export default Navigation;
