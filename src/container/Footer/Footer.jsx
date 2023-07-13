import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import  {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
  <FooterOverlay />
  <Newsletter />

  <div className='app__footer-links'>
    <div className='app__footer-links_contact'>
      <h1 className='app__footer-headtext'>Contact Us</h1>
      <p className='p__opensans'>Ad aute enim excepteur </p>
      <p className='p__opensans'>+91 xxxxxxxxxx</p>
      <p className='p__opensans'>+91 xxxxxxxxxx</p>
    </div>
    <div className='app__footer-links_logo'>
      <img src={images.gericht}/>
      <p className='p__opensans'>"The best way to find yourself, is to lose yourself in the service of others."</p>
      <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop:'15px'}} />
      <div className='app__footer-links_icons'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
    </div>
    <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Mon - Fri:</p>
        <p className='p__opensans'>8:00 am - 12:00 am</p>
        <p className='p__opensans'>Sat - Sun:</p>
        <p className='p__opensans'>7:00 am - 11:00 pm</p>
    </div>
  </div>
  <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gerícht. All Rights Reserved</p>
  </div>
  </div>
);

export default Footer;
