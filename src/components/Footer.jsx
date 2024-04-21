import React from 'react'
import './css/Footer.css'
import { NavLink } from 'react-router-dom'

// ICONS 
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineBusAlert } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { CiGift } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";



function Footer() {
  return (
  <>

    <div className="footerParent">
        <div className="fotterParentChild1">
            <div className="footerParentChildChildren">
            <p className="footerHeading">About</p>
            <NavLink to="/info/Contact" className="footerLinks">Contact Us</NavLink>
            <NavLink to="/info/About" className="footerLinks">About Us</NavLink>
                <p className="footerLinks">Careers</p>
                <p className="footerLinks">ArriveForYou Stories</p>
                <p className="footerLinks">Corporate Information</p>
            </div>
            <div className="footerParentChildChildren">
            <p className="footerHeading">Our Companies</p>
                <p className="footerLinks">Daraz</p>
                <p className="footerLinks">Amazon</p>
                <p className="footerLinks">Shopsy</p>
            </div>       <div className="footerParentChildChildren">
                <p className="footerHeading">Help</p>
                <p className="footerLinks">Payments</p>
                <p className="footerLinks">Shipping</p>
                <p className="footerLinks">Cancellation & Returns</p>
                <p className="footerLinks">FAO</p>
            </div>       <div className="footerParentChildChildren">
                <p className="footerHeading">Consumer Policy</p>
                <p className="footerLinks">Cancellation & Returns</p>
                <p className="footerLinks">Terms Of Use</p>
                <p className="footerLinks">Security</p>
                <p className="footerLinks">Privacy</p>
                <p className="footerLinks">Sitemap</p>
                <p className="footerLinks">EPR Compliances</p>
            </div>
        </div>
        <div className="fotterParentChild2 ">
        <div className="footerParentChildChildren">
        <p className="footerHeading">Mail Us</p>
        <p className="footerLinks">ArriveForYou Internet Pvt. Ltd.</p> 
        <p className="footerLinks">Building Alyssca &</p> 
        <p className="footerLinks">Embasy Tech Village</p> 
        <p className="footerLinks">Hetauda, Manakamna Chowk</p> 
        <p className="footerLinks">Sarlahi, Nepal</p> 
            </div>    
                    <div className="footerParentChildChildren">
                    <p className="footerHeading">Registered Office Address</p>
                    <p className="footerLinks">ArriveForYou Internet Pvt. Ltd.</p> 
        <p className="footerLinks">Building Alyssca &</p> 
        <p className="footerLinks">Embasy Tech Village</p> 
        <p className="footerLinks">Hetauda, Manakamna Chowk</p> 
        <p className="footerLinks">Sarlahi, Nepal</p>
        <p className="footerLinks">CIN: US116392UJ08JLSAJK</p>
        <p className="footerLinks">Telephone: 044-52098229</p>
            </div> 
            <div className="footerParentChildChildren">
                <p className="footerHeading">Social</p>
                <div className="icons">
                <FaSquareXTwitter  className='socialLink'/>
                <FaFacebookSquare className='socialLink' />
                <IoLogoYoutube  className='socialLink'/>
                </div>
            </div> 
        </div>
        <div className="bottomFooterParent">
        <div className="bottomFooterParentChildren">
        <MdOutlineBusAlert className='socialLink' />
        <p className='footerLinks'>Become a Seller</p>
        </div>
        <div className="bottomFooterParentChildren">
        <RiAdvertisementLine  className='socialLink'/>
        <p className='footerLinks'>Advertise</p>
        </div>
        <div className="bottomFooterParentChildren">
        <CiGift className='socialLink' />
        <p className='footerLinks'>Gift Cards</p>
        </div>
        <div className="bottomFooterParentChildren">
        <FiHelpCircle className='socialLink' />
        <p className='footerLinks'>Help Center</p>
        </div>
        <div className="bottomFooterParentChildren">
        <FaRegCopyright className='socialLink' />
        <p className='footerLinks'>&copy; 2024 Arriveforyou.com</p>
        </div>
        <div className="footerImg">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="" />
        </div>
    </div>
    </div>
 
  </>
  )
}

export default Footer