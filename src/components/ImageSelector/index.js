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
import { actionTypes } from '../../state';

const ImageSelector = () => {
  const [{ images, selectedImageId }, dispatch] = useStateContext();

  useEffect(() => {
    if (images && !selectedImageId) {
      dispatch({
        type: actionTypes.setSelectedImage,
        payload: images.allIds[0],
      });
    }
  }, [dispatch, images, selectedImageId]);

  if (!images) return null;

  return (
    <Box p={4}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedImageId}
        </MenuButton>
        <MenuList maxHeight={300} overflowY="scroll">
          {images.allIds.map((id) => {
            const imageName = images[id].name;
            return (
              <MenuItem
                key={imageName}
                onClick={() =>
                  dispatch({
                    type: actionTypes.setSelectedImage,
                    payload: imageName,
                  })
                }
              >
                {imageName}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ImageSelector;
