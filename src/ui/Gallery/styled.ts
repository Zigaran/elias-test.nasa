import styled from 'styled-components';

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 110px);
  }
`;

export const ImageGallery = styled.img`
  height: 250px;
  width: 250px;
  @media (max-width: 500px) {
    max-height: 110px !important;
    max-width: 110px !important;
  }
`;
