import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import { postApi } from '../../utiles/APi/functions';
import { updatePassword } from '../../utiles/APi/api';
import { useHistory } from 'react-router';

export default function Mymodal1() {
  const history = useHistory();
  const [basicModal, setBasicModal] = useState(false);
  const [oldPass, setOldPass] = useState(null);
  const [newPass, setNewPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);

  const toggleShow = () => setBasicModal(!basicModal);

  const updateNewPassword = async (e) => {
    e.preventDefault();
    let data = {
      password: newPass,
      reset_password_token: ''
    };
    const navigate = "/";
    const response = await postApi(updatePassword, data, history, navigate);
  };

  return (
    <>
    <MDBBtn className="change_passBtn" onClick={toggleShow}>
    Change password
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
          <form 
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
            </form>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>
  );
}