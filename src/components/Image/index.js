import Imgix from 'react-imgix';
import styles from './Image.module.css';

const Image = ({ image }) => {
  if (!image) return null;
  return (
    <div className={styles.imageContainer}>
      <Imgix className={styles.image} src={image.url} />
    </div>
  );
};

export default Image;
