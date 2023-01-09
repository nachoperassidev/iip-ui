import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  Drawer,
  DrawerContent,
  Text,
  Heading,
  Card,
  Tag,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { useStateContext } from '../../providers';
import { actionTypes } from '../../state';
import { getSelectedImage } from '../../utils';

dayjs.extend(relativeTime);

const VersionHistory = () => {
  const [
    { images, selectedImageName, selectedVersionId, versionHistoryOpen },
    dispatch,
  ] = useStateContext();

  if (!images || !selectedImageName) return null;

  const selectedImage = getSelectedImage(images, selectedImageName);

  console.log(selectedImage);

  return (
    <Box minH="100vh">
      <VersionHistoryContent
        onClose={() => dispatch({ type: actionTypes.closeVersionHistory })}
        display={{ base: 'none', md: 'block' }}
        versions={selectedImage.versions}
        selectedVersionId={selectedVersionId}
      />
      <Drawer
        autoFocus={false}
        isOpen={versionHistoryOpen}
        placement="left"
        onClose={() => dispatch({ type: actionTypes.closeVersionHistory })}
        returnFocusOnClose={false}
        size="full"
      >
        <DrawerContent>
          <VersionHistoryContent
            onClose={() => dispatch({ type: actionTypes.closeVersionHistory })}
          />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const VersionHistoryContent = ({
  onClose,
  versions,
  selectedVersionId,
  ...rest
}) => {
  const currentVersionId = versions?.[0].id;
  return (
    <Box
      bg={'gray.200'}
      borderRight="1px"
      borderRightColor={'gray.300'}
      w={{ base: 'full', md: 60 }}
      h="full"
      {...rest}
    >
      <Box pos="sticky" top={0} p={4}>
        <Flex alignItems="center" justifyContent="space-between" mb={8}>
          <Heading size="md" fontWeight="bold">
            Version history
          </Heading>
          <CloseButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onClose}
          />
        </Flex>
        {versions ? (
          <Box>
            {versions.map((version) => (
              <VersionHistoryItem
                key={version.id}
                version={version}
                isCurrentVersion={currentVersionId === version.id}
                isSelectedVersion={selectedVersionId === version.id}
              />
            ))}
          </Box>
        ) : (
          <Text>No versions yet...</Text>
        )}
      </Box>
    </Box>
  );
};

const VersionHistoryItem = ({
  version,
  isCurrentVersion,
  isSelectedVersion,
}) => {
  const [state, dispatch] = useStateContext();
  const filters = Object.keys(version.filters).map((filterName) => ({
    filterName,
    filterValue: version.filters[filterName],
  }));

  return (
    <Card
      p={4}
      mb={4}
      bg={isSelectedVersion ? 'blue.100' : 'white'}
      cursor="pointer"
      onClick={() =>
        dispatch({ type: actionTypes.setSelectedVersion, payload: version.id })
      }
    >
      {isCurrentVersion && (
        <Box>
          <Tag size="sm" bg="blue.500" color="white" fontWeight="normal">
            Current version
          </Tag>
        </Box>
      )}
      {filters.map(({ filterName, filterValue }) => (
        <Text key={filterName}>{`${filterName}: ${filterValue}`}</Text>
      ))}
      <Text fontSize="xs" textAlign="right" fontStyle="italic">
        {version.initialVersion
          ? 'Initial version'
          : dayjs(version.date).fromNow()}
      </Text>
    </Card>
  );
};

export default VersionHistory;
