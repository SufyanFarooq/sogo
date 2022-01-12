import React, { useEffect, useState } from 'react'
import './NavStyle.css'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homepage from '../Homepage/Homepage';
import { FaBars } from 'react-icons/fa'
// import BuyHome from '../Buy Home/BuyHome    '
import { loadAccountAddress } from '../../apis/api'
import { FaTelegram } from 'react-icons/fa';



function Navbarnav({ setModalShow }) {
    const [accoutadd, setaccoutadd] = useState("Connect")
    let MainAddress
    const get = async () => {

        MainAddress = await loadAccountAddress()
        let acc = MainAddress.substring(0, 6) + "..." + MainAddress.substring(MainAddress.length - 6)
        setaccoutadd(acc);


    }
    // useEffect(() => {
    //     get();
    // })
    return (
        <div >
            <div id="sticky-wrapper" className="fixed-top" style={{ height: '180px' }}>
                <nav className="navbar navbar-expand-md navbar-light bg-faded cripto_nav">
                    <div className="container custom-container " style={{ display: 'flex', flexDirection: 'row' }}>

                        <a className="navbar-brand navimgcem" data-scroll="" href="#" style={{ width: '12rem' }}>
                            <img src="S-01.png" alt="logo" width="25%" style={{ borderRadius: '10px' }} /> <span className="navheadername" >SOGO SALE</span>

                        </a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FaBars
                            />
                        </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'end' }}>
                            <ul className="navbar-nav ml-auto navimgcem" >
                                {/* <li class="nav-item dropdown">
                                   


                                    <a className="nav-link  navtext text-white" href="https://www.SOGOwap.finance/about-us">
                                        About Us
                                    </a>

                                    <div class="dropdown-content">
                                        <a className="dropdown-item text-white" href="https://www.SOGOwap.finance/project-vision">Project Vision</a>
                                        <a className="dropdown-item" href="https://www.SOGOwap.finance/future-map">Our Future Map</a>

                                    </div>
                                </li> */}
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link   text-white" href="#" >
                                        Our Gallery
                                    </a>
                                    <div class="dropdown-content">
                                        <a className="dropdown-item" href="https://www.SOGOwap.finance/grandpalm">Grand Palm Hotel</a>
                                        <a className="dropdown-item" href="https://www.SOGOwap.finance/opening">Opening Ceremony</a>
                                        <a className="dropdown-item" href="https://www.SOGOwap.finance/press">Press Conference</a>
                                        <a className="dropdown-item" href="https://www.SOGOwap.finance/others">Others</a>
                                        
                                    </div>
                                </li> */}
                                <li class="nav-item"><a href="#mainHome" class="nav-link navlinktext ml-2" style={{ marginLeft: '2rem' }} >Home</a></li>
                                <li class="nav-item"><a href="#Projectpage" class="nav-link navlinktext ml-5" style={{ marginLeft: '2rem' }}>Project</a></li>
                                <li class="nav-item"><a href="#Partnerage" class="nav-link navlinktext" style={{ marginLeft: '2rem' }}>Partners</a></li>
                                {/* <li class="nav-item"><a href="https://www.SOGOwap.finance/news" class="nav-link text-white">News</a></li> */} <br />

                            </ul>
                            {/* <Link to="/home" > */}

                            <div className='navimgcem'>

                            
                            <div class="language  " style={{ marginLeft: '2rem' }}>
                                <button className="token" onClick={() => get()} >{accoutadd}</button>
                            </div>
                            {/* </Link> */}
                            <br /><br />
                            <div class="language " style={{ marginLeft: '2rem' }}>
                                <a href="#" className="token " onClick={() => setModalShow(true)}>BUY SOGO</a>
                            </div>
                            {/* <br /><br /><br /> */}

                            <div className="SocialICon ">
                                {/* <span className="IconB1"> <IoLogoInstagram /></span>
                                <span className="IconB"> <BsFacebook /></span> */}
                                <a target="_blank" href="https://t.me/soglobal"  >
                                <span className="IconB"> <FaTelegram/></span></a>
                                {/* <span className="IconB"> <AiFillYoutube /></span> */}
                                {/* <span className="IconB"> <IoLogoInstagram /></span> */}

                            </div>
                            </div>
                        </div>



                    </div>



                </nav>
                <div id="mainHome"></div>
            </div>


            {/* <Homepage/> */}
        </div>
    )
}

export default Navbarnav
