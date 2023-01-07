import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  Box,
} from '@chakra-ui/react';

const ImageSelector = ({ images, selectedImageName, setSelectedImageName }) => {
  return (
    <Box p={4}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedImageName}
        </MenuButton>
        <MenuList maxHeight={300} overflowY="scroll">
          {images.map((image) => (
            <MenuItem onClick={() => setSelectedImageName(image.name)}>
              {image.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ImageSelector;
