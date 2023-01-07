import Imgix from 'react-imgix';

import { useStateContext } from '../../providers';
import { getSelectedImage } from '../../utils';

import styles from './Image.module.css';

const Image = () => {
  const [state] = useStateContext();

  const { images, selectedImageName } = state;

  const selectedImage = getSelectedImage(images, selectedImageName);

  if (!selectedImage) return null;

  return (
    <div className={styles.imageContainer}>
      <Imgix className={styles.image} src={selectedImage.url} sizes="100vw" />
    </div>
  );
};

export default Image;
