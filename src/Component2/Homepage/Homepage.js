import React from 'react'
import './homeStyle.css'
import ParticlesBg from 'particles-bg'
export default function Homepage({setModalShow}) {
    return (
        <div  >
            {/* <ParticlesBg color="#f95192" num={50} type="cobweb" className="Tatora" /> */}


            <div className="container-fluid maindiv" >

                <div className="container">
                    <div className="row rowdiv ">
                        <div className="col-lg-6">
                            <h2 className="headingh1" >Our Plan Is To Make SOGO The Cryptocurrency Of the Blockchain information Platforms</h2>
                        </div>
                        <div className="col-lg-6">
                            <img src="l.JPG" alt="" width="100%" />
                        </div>
                    </div>

                    <div className="seconddiv">
                        <img src="S-01.png" alt="" width="80px" />
                    </div>
                    <div className="secondinnerdiv mt-4">
                        {/* <ParticlesBg color="#f95192" num={50} type="cobweb" className=""  /> */}
                        <h5 className="seconddivheading mr-5">What's all that for?</h5>

                        <h1 className="seconddivheadinginner" >We Can</h1>
                        <h1 className="seconddivheadinginner">SOGO SALE</h1>
                        <p className="seconddivP" >SOGO LINK (SOGO) is a world stake mining of monetary volume</p>

                    </div>

                    <div className="thirddivimg">
                        <img className="img2" src="section-2.png" alt="" width="90%" />
                        <img className="Thaicoinlogo" src="S-01.png"  alt="" width="27%"  />
                    </div>


                    <div className="thirddivimg">
                        <a role="button" class="btn btn-default sm-button buy-btn buy-card-btn hoverbtn" onClick={() => setModalShow(true)} >	Buy SOGO
                            <img class="blue-btn-img" src="S-01.png" style={{borderRadius:'170px 180px 180px 180px'}} />
                        </a>
                    </div>

                    <div className="seconddiv  newdivfourth ">
                        <img src="S-01.png" alt="" width="80px" />
                    </div>

                    <div className="secondinnerdiv mt-4">

                        <h1 className="seconddivheadinginner mt-2" >One Click</h1>
                        <p className="seconddivP FourthP "  >we are very happy to announce that you can send your crypto assets on one click anywhere in the world. you can make any transition on one click.</p>

                    </div>



                    <div className="thirddivimg">
                        <a role="button" class="btn btn-default sm-button buy-btn buy-card-btn hoverbtn" onClick={() => setModalShow(true)} >	Buy SOGO                            <img class="blue-btn-img" src="S-01.png" style={{borderRadius:'170px 180px 180px 180px'}} />
                        </a>
                    </div>


                    <div className="fourthdivul">
                        <ul>
                            <li>Unique Module for instant transfer of any cryptocurrency, regardless of the state of the network.</li>
                            <li>Instant transfer of any cryptocurrency, regardless of the state of the network.</li>
                        </ul>
                    </div>

                    <div className="fourthdivgif" >
                        <img src="click.gif" alt="" width="50%" />
                    </div>

                    <div id="Projectpage"></div>
                    <div className="fifthdivmain" >
                        <div className="seconddiv  newdivfourth " >
                            <img src="S-01.png" alt="" width="80px" />
                        </div>

                        <div className="secondinnerdiv mt-4">

                            <h6 className="seconddivheadinginner fifthh6 mt-2" >Is That All ?</h6>
                            <h1 className="seconddivP FifthP "  >Best Community Project</h1>

                        </div>


                        <div className="fifthdivrow" >
                            <div className="row">
                                <div className="col-lg-5 mt-5">
                                    <div className="card fifthdivcard">
                                        <div className="cardheader fifthdivheadercolor">
                                            <div className="fifthdivheaderimg">
                                                <img className="Thailogo" src="S-01.png" width="15%" alt="" style={{borderRadius:'170px 180px 180px 180px'}} />

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="fifthdivbodyP">
                                                We choose to share our success with the world in an effort to better the lives of our community,we also provide a governance feature where every member of the community can upvote and make some strategic decisions about the growth of the cryptocurrency token. It is the community who can guarantee it's success. On Telegram, Facebook, Instagram, TikTok, Reddit and other social
                                                media channels, our awesome community is spreading the word about us.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 mt-5"></div>

                                <div className="col-lg-5 mt-5">
                                    <div className="card fifthdivcard" >
                                        <div className="cardheader">
                                            <div className="fifthdivheaderimg">
                                                <img className="Thailogo" src="S-01.png" width="15%" alt="" style={{borderRadius:'170px 180px 180px 180px'}} />

                                            </div>
                                        </div>
                                        <div className="card-body" >
                                            <p className="fifthdivbodyP">
                                                <br /><br />
                                                <br /> <br />
                                                We are world's first social media based decentralized platform. The social media team aimed at delivering on it's promises as guided by it's
                                                unique roadmap through the development of it's platforms. <br /><br /><br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="fifthdivmainfull">
                                <div className="fifthdivinnerheading">
                                    <h2 className="fifthdivinnertext">IDO IPO IEO</h2>
                                    <h3 className="fifthdivinnertext">Is it profitable for me?</h3>
                                    <h4 className="fifthdivinnertext">We will annouce the data ASAP.</h4>

                                </div>
                            </div>
                            <br /><br /><br />
                        </div>



                    </div>


                </div>
            </div>
        </div>
    )
}
