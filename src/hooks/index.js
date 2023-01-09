import { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { useStateContext } from '../providers';
import { fetchSampleImages } from '../services';
import { actionTypes } from '../state';

export const useVersionHistory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return {
    isVersionHistoryOpen: isOpen,
    onVersionHistoryOpen: onOpen,
    onVersionHistoryClose: onClose,
  };
};

export const useSetInitialState = () => {
  const [{ images, selectedImageId }, dispatch] = useStateContext();

  useEffect(() => {
    if (!images) {
      fetchSampleImages().then(({ images, versions }) =>
        dispatch({
          type: actionTypes.setImages,
          payload: { images, versions },
        }),
      );
    } else if (!selectedImageId) {
      dispatch({
        type: actionTypes.setSelectedImage,
        payload: images.allIds[0],
      });
    }
  }, [images, selectedImageId, dispatch]);
};
