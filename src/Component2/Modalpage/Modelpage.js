import React from 'react'
import Modal from 'react-bootstrap/Modal'
import BuyHome from '../Buy Home/BuyHome';




function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"  >

       <span style={{color:' #f95192'}}> BUY</span>  <span  style={{color:' #f95192'}}>SOGO</span> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <BuyHome/>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
    
  
    
function Modelpage({setModalShow , modalShow }) {
    
    return (
        <div>
            {/* <button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </button> */}
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        </div>
    )
}

export default Modelpage
