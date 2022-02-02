import React, { useContext } from 'react';

import { DataStore } from '../../stores';

import { GalleryGrid, ImageGallery } from './styled';

const Gallery = () => {
  const dataStore = useContext(DataStore);

  return (
    <GalleryGrid>
      {dataStore.roverPhotos?.map((photo, idx) => {
        return <ImageGallery style={{ height: 250, width: 250 }} src={photo.img_src} key={photo.id} alt={`${idx}`} />;
      })}
    </GalleryGrid>
  );
};

export default Gallery;
