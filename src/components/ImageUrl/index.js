import { Flex, Textarea } from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import { buildImageUrl } from '../../utils';

const ImageUrl = () => {
  const [{ images, versions, selectedImageId, selectedVersionId }] =
    useStateContext();

  if (!images || !selectedImageId) return null;

  const selectedImage = images[selectedImageId];

  const selectedVersion = versions[selectedVersionId];

  return (
    <Flex bg="white">
      <Textarea
        readOnly
        resize="none"
        flexGrow={1}
        margin={8}
        bg="blue.100"
        borderRadius={0}
        border="none"
        value={buildImageUrl({
          baseUrl: selectedImage.url,
          filters: selectedVersion.filters,
        })}
      />
    </Flex>
  );
};

export default ImageUrl;
