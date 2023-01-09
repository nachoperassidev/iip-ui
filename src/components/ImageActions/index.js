import { useStateContext } from '../../providers';
import CurrentVersionActions from './CurrentVersionActions';
import PreviousVersionActions from './PreviousVersionActions';

const ImageActions = () => {
  const [{ images, selectedImageId, selectedVersionId }] = useStateContext();

  if (!images || !selectedImageId) return null;

  const selectedImage = images[selectedImageId];

  const currentImageVersion = selectedImage.versions[0];

  if (selectedVersionId === currentImageVersion) {
    return <CurrentVersionActions />;
  } else {
    return <PreviousVersionActions />;
  }
};

export default ImageActions;
