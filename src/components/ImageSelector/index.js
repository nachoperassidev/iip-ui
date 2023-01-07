import { useEffect } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  Box,
} from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import { fetchSampleImages } from '../../services';
import { actionTypes } from '../../state';

const ImageSelector = () => {
  const [state, dispatch] = useStateContext();

  const { images, selectedImageName } = state;

  useEffect(() => {
    if (!images.length) {
      fetchSampleImages().then((images) =>
        dispatch({ type: actionTypes.setImages, payload: images }),
      );
    } else if (!selectedImageName) {
      dispatch({ type: actionTypes.setSelectedImage, payload: images[0].name });
    }
  }, [dispatch, images, selectedImageName]);

  return (
    <Box p={4}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedImageName}
        </MenuButton>
        <MenuList maxHeight={300} overflowY="scroll">
          {images.map((image) => (
            <MenuItem
              key={image.name}
              onClick={() =>
                dispatch({
                  type: actionTypes.setSelectedImage,
                  payload: image.name,
                })
              }
            >
              {image.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ImageSelector;
