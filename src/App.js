import React from 'react'
import Navbarnav from './Component2/NavbarTop/Navbarnav'
import Pagetopage from './Pagetopage'
import Homepage from './Component2/Homepage/Homepage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
    <ToastContainer />
      <Pagetopage />
    </div>
  );
}

export default App;
