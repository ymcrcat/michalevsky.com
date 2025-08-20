import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import "react-modal-video/css/modal-video.min.css";

function VideoPopup(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <i>
      <span> </span><button onClick={openModal} style={{background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer'}}>(watch)</button>
      <ModalVideo
        isOpen={modalIsOpen}
        onClose={closeModal}
        channel="youtube"
        videoId={props.url}
      />
    </i>
  );
}

export default VideoPopup;
