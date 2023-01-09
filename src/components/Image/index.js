import ImgixComponent from 'react-imgix';
import { Box, Flex } from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import { buildImageUrl } from '../../utils';

import styles from './Image.module.css';

const Image = () => {
  const [{ images, versions, selectedImageId, selectedVersionId }] =
    useStateContext();

  if (!images || !selectedImageId) return null;

  const selectedImage = images[selectedImageId];

  const selectedVersion = versions[selectedVersionId];

  const imageUrl = buildImageUrl({
    baseUrl: selectedImage.url,
    filters: selectedVersion.filters,
  });

  return (
    <Flex height="60vh" bg="gray.100" justifyContent="center" p={4}>
      <ImgixComponent className={styles.image} src={imageUrl} sizes="100vw" />
    </Flex>
  );
};

export default Image;
