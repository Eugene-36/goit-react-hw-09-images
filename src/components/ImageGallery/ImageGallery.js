import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
// import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
import s from "../ImageGallery/ImageGallery.module.css";
import { v4 as uuidv4 } from "uuid";

export default function ImageGallery({ images }) {
  const [showModal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [url, setUrl] = useState("");

  const toggleModal = useCallback(() => {
    setModal((prevShowModal) => !prevShowModal);
    setModalImage(null);
  }, []);

  const openModal = useCallback(
    (modalImage) => {
      toggleModal();
      setModalImage(modalImage);
    },
    [toggleModal]
  );

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal}>{<img src={modalImage} alt="#" />}</Modal>
      )}
      <ul className={s.gallery}>
        {images.map((e) => (
          <ImageGalleryItem
            key={uuidv4()}
            url={e.webformatURL}
            alt={e.tags}
            modalImage={e.largeImageURL}
            openModal={openModal}
          />
        ))}
      </ul>
    </>
  );
}
// class ImageGallery extends Component {
//   state = {
//     showModal: false,
//     modalImage: "",
//     url: "",
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };
//   openModal = (modalImage) => {
//     this.toggleModal();

//     this.setState({ modalImage });
//   };
//   render() {
//     const { images } = this.props;
//     const { showModal, modalImage } = this.state;
//     return (
//       <>
//
//       </>
//     );
//   }
// }
// export default ImageGallery;
