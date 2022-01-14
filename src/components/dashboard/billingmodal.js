import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';

export default function Mymodal2() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);


  return (
    <>
    <MDBBtn className="change_passBtn" onClick={toggleShow}>
    Add Payment Method
    </MDBBtn>
    <MDBModal show={basicModal} getOpenState={(e) => setBasicModal(e)} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>
                <p className="title_modal">Create a new password</p>
            </MDBModalTitle>
            <MDBBtn className='btn-close popUp_close' color='none' onClick={toggleShow}>X</MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>

          <div className="modal-body" bis_skin_checked="1">
            <div className="modal_body" bis_skin_checked="1">
                <p className="paymentType">Payment type<i className="bi bi-chevron-compact-right"></i> <span>Payment information<i className="bi bi-chevron-compact-right"></i>Billing Address</span></p>
                <div className="modal_input" bis_skin_checked="1"><input type="text" /></div>
                <div className="inner_body" bis_skin_checked="1">
                    <p className="selectType">Select Payment Type</p>
                        <a href="#!" className="btn method_type"><i className="bi bi-credit-card-2-front"></i> Credit Card</a>
                        <a href="#!" className="btn method_type"><i className="bi bi-paypal"></i>Paypal</a>
                        <a href="#!" className="btn method_type">Auto Fill From Browser</a>
                </div>
            </div>
            </div>
          
          {/* <form 
            onSubmit={(e) => {
              updateNewPassword(e);
            }}>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={oldPass}
              onChange={(e) => {
                setOldPass(e.target.value);
              }}
              placeholder="Old Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={newPass}
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
              placeholder="New Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={confirmPass}
              onChange={(e) => {
                setConfirmPass(e.target.value);
              }}
              placeholder="Confirm Password"
              required
            />
          </div>
            <button type="submit" className="btn popUp_btn">
              Submit
            </button>
            </form> */}
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>
  );
}