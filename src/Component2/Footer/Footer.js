import React from 'react'
import './Footer.css';
import { IoLogoInstagram } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { AiFillYoutube } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <div className="cpontainer-fluid" style={{marginTop:'10rem'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">

                            <div className="footerimg">
                                <img src="S-01.png" alt=""  width="120px"   style={{borderRadius:'170px 180px 180px 180px'}}/> <span style={{fontSize:'25px',fontWeight:'bold',color:'#f95192',fontFamily:'serif',marginLeft:'1rem'}}>SOGO SALE</span>
                            </div>

                            <div className="SocialICon ">
                                {/* <span className="IconB1"> <IoLogoInstagram /></span>
                                <span className="IconB"> <BsFacebook /></span> */}
                                {/* <span className="IconB"> <FaTelegram/></span> */}
                                {/* <span className="IconB"> <AiFillYoutube /></span> */}
                                {/* <span className="IconB"> <IoLogoInstagram /></span> */}

                            </div>

                        </div>
                        <div className="col-lg-4" >
                            <div className="headerItem "  style={{marginTop:'-3rem'}}>
                               <ul className="footerUl" >
                                    <div className="footerHeading" >
                                        <h6 className="Foterh">Company</h6>
                                    </div>
                                    <br />
                                    <li  >
                                        <a className="link" href="" >Home</a>
                                    </li>

                                    <li >
                                        <a className="link" href="">About Us</a>
                                    </li>

                                    <li className="">
                                        <a className="link" href="">FAQ</a>
                                    </li>

                                    <li >
                                        <a className="link" href="">Terms of Service & Conditions</a>
                                    </li>


                                </ul>

                            </div>

                        </div>


                        <div className="col-lg-4" >
                            <div className="headerItem "  style={{marginTop:'-3rem'}}>
                               <ul className="footerUl" >
                                    <div className="footerHeading" >
                                        <h6 className="Foterh">Information</h6>
                                    </div>
                                    <br />
                                    <li  >
                                        <a className="link" href="" >Privacy Policy</a>
                                    </li>

                                    <li >
                                        <a className="link" href="">Risk Disclosure</a>
                                    </li>

                                    <li className="">
                                        <a className="link" href="">Legal Disclaimer</a>
                                    </li>

                                    <li >
                                        <a className="link" href="">Live Chat</a>
                                    </li>


                                </ul>

                            </div>

                        </div>

                    </div>
                </div>
               

               <div className="foter-footer mt-5">
                   <p>Copyright © 2021 - SOGO SALE</p>
               </div>

                <br />
            </div>

        </div>
    )
}

export default Footer
