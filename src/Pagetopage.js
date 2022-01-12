import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbarnav from './Component2/NavbarTop/Navbarnav'
import BuyHome from './Component2/Buy Home/BuyHome'
import Homepage from './Component2/Homepage/Homepage';
import Nextpart from './Component2/Nextpart/Nextpart';
import Accordian from './Component2/Accordian/Accordian'

import './App.css';
import Footer from './Component2/Footer/Footer';
import Modelpage from './Component2/Modalpage/Modelpage';



function Pagetopage() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="App">



          
                <Navbarnav setModalShow={setModalShow} />
                <Homepage setModalShow={setModalShow} />
                <Nextpart />
                <Accordian />
                <Modelpage modalShow={modalShow} setModalShow={setModalShow} />
                <Footer/>

                {/* <Switch>

                <Route exact path="/home" component={BuyHome}></Route>

                    <Route exact path="/home" component={BuyHome}></Route>

                </Switch> */}
         

        </div>
    )
}

export default Pagetopage
