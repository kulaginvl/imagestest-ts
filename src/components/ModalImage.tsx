import { FC } from 'react';

interface ModalImageType {
  imageItem: string;
  openModal: boolean;
  clModal: () => void;
}

export const ModalImage: FC<ModalImageType> = ({ imageItem, openModal, clModal }) => {
  return (
    <>
      {openModal && (
        <div className="modal-ovr">
          <div className="modal__image" onClick={clModal}>
            <img src={imageItem} alt={imageItem} />
          </div>
        </div>
      )}
    </>
  );
};
