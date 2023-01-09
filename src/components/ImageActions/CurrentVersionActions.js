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
import { buildNewImageVersion } from '../../utils';

const filters = [
  'flip',
  'orient',
  'rot',
  'bri',
  'con',
  'exp',
  'gam',
  'high',
  'hue',
  'invert',
  'sat',
  'shad',
  'sharp',
  'usm',
  'usmrad',
  'vib',
];

const CurrentVersionActions = () => {
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const [{ versions, selectedVersionId }, dispatch] = useStateContext();

  const currentImageVersion = versions[selectedVersionId];

  const handleApplyNewFilter = () => {
    dispatch({
      type: actionTypes.addNewImageVersion,
      payload: buildNewImageVersion(currentImageVersion, {
        [filterType]: filterValue,
      }),
    });
    setFilterType('');
    setFilterValue('');
  };

  return (
    <Box padding={4}>
      <Heading size="md" mb={4}>
        New filter
      </Heading>
      <Flex
        flexDir={{ base: 'column', sm: 'row' }}
        width="100%"
        alignItems="center"
        flexWrap="wrap"
      >
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            width={{ base: '100%', sm: 'auto' }}
            mr={{ base: 0, sm: 4 }}
            mb={{ base: 4, sm: 0 }}
          >
            {filterType}
          </MenuButton>
          <MenuList maxHeight={300} overflowY="scroll">
            {filters.map((filter) => (
              <MenuItem key={filter} onClick={() => setFilterType(filter)}>
                {filter}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Input
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          mr={{ base: 0, sm: 4 }}
          mb={{ base: 4, sm: 0 }}
          width={{ base: '100%', sm: 'auto' }}
        />
        <Button
          disabled={!filterType || !filterValue}
          onClick={handleApplyNewFilter}
          width={{ base: '100%', sm: 'auto' }}
        >
          Apply
        </Button>
      </Flex>
    </Box>
  );
};

export default CurrentVersionActions;
