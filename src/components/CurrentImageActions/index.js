import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Heading,
  Flex,
  Box,
  Menu,
  Button,
  MenuButton,
  MenuList,
  Input,
  MenuItem,
} from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import { actionTypes } from '../../state';
import { buildNewImageVersion, getSelectedImage } from '../../utils';

const filters = ['flip', 'orient', 'rot'];

const CurrentImageActions = () => {
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const [{ images, selectedImageName }, dispatch] = useStateContext();

  if (!images || !selectedImageName) return null;

  const selectedImage = getSelectedImage(images, selectedImageName);

  const currentImageVersion = selectedImage.versions?.[0];

  const handleApplyNewFilter = () => {
    dispatch({
      type: actionTypes.addNewImageVersion,
      payload: {
        selectedImageName,
        newVersion: buildNewImageVersion(currentImageVersion, {
          [filterType]: filterValue,
        }),
      },
    });
    setFilterType('');
    setFilterValue('');
  };

  return (
    <Box padding={4}>
      <Heading size="md" mb={4}>
        New filter
      </Heading>
      <Flex width="100%" justifyContent="flex-start" alignItems="center">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mr={4}>
            {filterType}
          </MenuButton>
          <MenuList>
            {filters.map((filter) => (
              <MenuItem key={filter} onClick={() => setFilterType(filter)}>
                {filter}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Input
          width="auto"
          mr={4}
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        <Button
          disabled={!filterType || !filterValue}
          onClick={handleApplyNewFilter}
        >
          Apply
        </Button>
      </Flex>
    </Box>
  );
};

export default CurrentImageActions;
