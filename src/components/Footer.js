import React from 'react'
import "./Footer.css"

function Footer() {
    return (<>
        <footer>
            <div className="footer__container">
                <h4>Languages</h4>
                <ul>
                    <li><a href="#">React</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">jQuery</a></li>
                </ul>
            </div>
            <div className="footer__container">
                <h4>React</h4>
                <ul>
                    <li><a href="#">Hooks</a></li>
                    <li><a href="#">React-Router</a></li>
                    <li><a href="#">Context API</a></li>
                    <li><a href="#">Redux</a></li>
                    <li><a href="#">MUI</a></li>
                    <li><a href="#">Bootstrap</a></li>
                </ul>
            </div>
            <div className="footer__container">
                <h4>Plateform</h4>
                <ul>
                    <li><a href="#">NPM</a></li>
                    <li><a href="#">Git</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">VS-Code</a></li>
                    <li><a href="#">Window10</a></li>
                </ul>
            </div>
            <div className="footer__social__Icon">
                <div className="footer__search">
                    <input type="text" placeholder='Type here...'/>
                    <input type="submit" value="Search"/>
                </div>
                <div className="social__icons">
                    
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-solid fa-paper-plane"></i>

                </div>
            </div>
        </footer>
        <div className="copywrite">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ab!</p>
        </div>
    </>
    )
}

export default Footer