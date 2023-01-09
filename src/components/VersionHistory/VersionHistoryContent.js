import { Box, CloseButton, Flex, Heading, Text } from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import VersionHistoryItem from './VersionHistoryItem';

const VersionHistoryContent = ({ onClose, ...rest }) => {
  const [{ images, versions, selectedImageId, selectedVersionId }] =
    useStateContext();

  const selectedImage = images[selectedImageId];

  const selectedImageVersions = selectedImage.versions.map(
    (versionId) => versions[versionId],
  );

  const currentVersionId = selectedImage.versions[0];

  return (
    <Box
      bg="gray.200"
      borderRight="1px"
      borderRightColor="gray.300"
      w={{ base: 'full', md: 60 }}
      h="full"
      {...rest}
    >
      <Box pos="sticky" top={0} p={4} height="100vh" overflowY="scroll">
        <Flex alignItems="center" justifyContent="space-between" mb={8}>
          <Heading size="md" fontWeight="bold">
            Version history
          </Heading>
          <CloseButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onClose}
          />
        </Flex>
        {selectedImageVersions ? (
          <Box>
            {selectedImageVersions.map((version) => (
              <VersionHistoryItem
                key={version.id}
                version={version}
                isCurrentVersion={currentVersionId === version.id}
                isSelectedVersion={selectedVersionId === version.id}
                onClick={onClose}
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

export default VersionHistoryContent;
