import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  Flex,
  MenuGroup,
} from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import { actionTypes } from '../../state';

const ImageSelector = () => {
  const [{ images, selectedImageId }, dispatch] = useStateContext();

  const userImages = images.allIds.filter((image) => images[image].userAdded);

  const sampleImages = images.allIds.filter(
    (image) => !userImages.includes(image),
  );

  return (
    <Flex justifyContent="space-between" p={4}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedImageId}
        </MenuButton>
        <MenuList maxHeight={300} overflowY="scroll">
          {userImages.length ? (
            <MenuGroup title="Your images">
              {userImages.map((id) => {
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
            </MenuGroup>
          ) : (
            ''
          )}
          <MenuGroup title="Sample images">
            {sampleImages.map((id) => {
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
          </MenuGroup>
        </MenuList>
      </Menu>
      <Button
        onClick={() =>
          dispatch({
            type: actionTypes.openNewImageModal,
          })
        }
      >
        Add new image
      </Button>
    </Flex>
  );
};

export default ImageSelector;
