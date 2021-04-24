import React from 'react';

import s from '../ImageGalleryItem/ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, alt, openModal, modalImage }) => {
  return (
    <li onClick={() => openModal(modalImage)} className={s.gallery__card}>
      <img src={url} alt={alt} />
    </li>
  );
};

// ImageGalleryItem.propTypes = {
//   openModal: PropTypes.func.isRequired,
//   modalImage: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default ImageGalleryItem;
