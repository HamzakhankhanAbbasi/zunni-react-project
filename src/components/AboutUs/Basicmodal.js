import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: '',
  boxShadow: 24,
  p: 4,
};
export default function Basicmodal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
        <Button className="pop_upBtn" onClick={handleOpen}>How To Identify Real Vs Fake</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <img sx={style} src="../Real vs Fake Fetish Necklace Panel 96.dpi for web.jpg" className="img-fluid basic_Img" />
          </Box>
        </Modal>
      </div>
    )
}
