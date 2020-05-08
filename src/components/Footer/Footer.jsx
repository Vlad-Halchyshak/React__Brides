import React from 'react'
import copyright from '../../images/copyright.png'
import heart from '../../images/heart.png'



const Footer = () => {

  return <footer>
    <div className="footer_container">
      <div className="copyright">

        <span>
          <img src={heart} />
          <i>Dating</i>
        </span>
        <h3>Brides</h3>
        <p>Copyright. Brides.Dating 2020</p>
        <img src={copyright} /></div>
      <div className="about">
        <ul className="about_text">
          <li><h3>About</h3></li>
          <li> <a href="0">Video Chat gallery</a></li>
          <li> <a href="0">Gallery of Ladies</a></li>
          <li> <a href="0">New Ladies</a></li>
          <li> <a href="0">Video Gallery</a></li>
          <li> <a href="0">Romantic dictionary</a></li>
          <li> <a href="0">What does she want?</a></li>
          <li> <a href="0">How we take ladies' photos</a></li>
          <li> <a href="0">Parade of brides</a></li>
          <li> <a href="0">Age Gap: should it matter?</a></li>
        </ul>
      </div>

      <div className="agency">
        <ul className="agency_text">
          <li><h3>Agency</h3></li>
          <li className="ag_mission"><a href="0">Our mission</a></li>
          <li className="ag_scams"><a href="0">Against Scams</a></li>
          <li className="ag_news"> <a href="0">News</a></li>
          <li className="ag_testimonials"><a href="0">Testimonials</a></li>
          <li className="ag_forgirs"><a href="0">For girls</a></li>
        </ul>
      </div>

      <div className="Services">
        <ul className="services_text">
          <li><h3>Services</h3></li>

          <li className="serv_our"><a href="0">Our services in brief</a></li>
          <li className="serv_com"><a href="0">Communication services</a> </li>
          <li className="serv_gift"><a href="0">Gifts for Lade</a></li>
          <li className="serv_spec"><a href="0">Special Invoice</a></li>
          <li className="serv_week"><a href="0">Weekly special</a></li>
          <li className="serv_trip"> <a href="0">Trip prices</a></li></ul>
      </div>
    </div>
  </footer>
}
export default Footer