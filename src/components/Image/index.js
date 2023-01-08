import Imgix from 'react-imgix';

import { useStateContext } from '../../providers';
import { getSelectedImage } from '../../utils';

import styles from './Image.module.css';

const Image = () => {
  const [{ images, selectedImageName }] = useStateContext();

  if (!images || !selectedImageName) return null;

  const selectedImage = getSelectedImage(images, selectedImageName);

  return (
    <div className={styles.imageContainer}>
      <Imgix className={styles.image} src={selectedImage.url} sizes="100vw" />
    </div>
  );
};

export default Image;
