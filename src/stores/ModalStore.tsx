/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';

const ModalStore = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalContextProvider = ({ children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  return <ModalStore.Provider value={{ isModalOpen, openModal, closeModal }}>{children}</ModalStore.Provider>;
};

export default ModalStore;
