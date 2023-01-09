import ImgixComponent from 'react-imgix';
import { Box, Flex } from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import {
  buildImageUrl,
  getSelectedImage,
  getSelectedVersion,
} from '../../utils';

import styles from './Image.module.css';

const Image = () => {
  const [{ images, selectedImageName, selectedVersionId }] = useStateContext();

  if (!images || !selectedImageName) return null;

  const selectedImage = getSelectedImage(images, selectedImageName);

  const selectedVersion = getSelectedVersion(selectedImage, selectedVersionId);

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
