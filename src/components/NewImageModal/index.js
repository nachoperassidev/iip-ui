import { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import { actionTypes } from '../../state';

const NewImageModal = () => {
  const [{ newImageModalOpen }, dispatch] = useStateContext();
  const [imageName, setImageName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddNewImage = () => {
    dispatch({
      type: actionTypes.addNewImage,
      payload: { name: imageName, url: imageUrl },
    });
    setImageName('');
    setImageUrl('');
    dispatch({ type: actionTypes.closeNewImageModal });
  };

  const handleModalClose = () => {
    setImageName('');
    setImageUrl('');
    dispatch({
      type: actionTypes.closeNewImageModal,
    });
  };

  return (
    <Modal
      isOpen={newImageModalOpen}
      onClose={handleModalClose}
      size={{ base: 'full', sm: 'md' }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New image</ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingBottom={4}>
          <FormControl>
            <FormLabel>Image name</FormLabel>
            <Input
              mb={4}
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Image url (from Imgix)</FormLabel>
            <Input
              type="url"
              placeholder="e.g: https://sandbox-uploads.imgix.net/u/1673292705-95bd5f33cea653897c82ac81e1d42a88"
              mb={4}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </FormControl>
          <Button
            disabled={!imageName || !imageUrl}
            onClick={handleAddNewImage}
          >
            Add
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewImageModal;
