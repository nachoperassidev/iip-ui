import { getSelectedImage } from '../utils';

export const initialState = {
  images: [],
};

export const actionTypes = {
  setImages: 'SET_IMAGES',
  setSelectedImage: 'SET_SELECTED_IMAGE',
  addNewImageVersion: 'ADD_NEW_IMAGE_VERSION',
};

export const mainReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case actionTypes.setImages:
      return {
        ...state,
        images: action.payload,
      };
    case actionTypes.setSelectedImage:
      return {
        ...state,
        selectedImageName: action.payload,
      };
    case actionTypes.addNewImageVersion:
      const { selectedImageName, newVersion } = action.payload;
      const selectedImage = getSelectedImage(state.images, selectedImageName);
      const selectedImageWithNewVersion = {
        ...selectedImage,
        versions: [newVersion, ...(selectedImage.versions || [])],
      };

      return {
        ...state,
        images: state.images.map((image) =>
          image.name === selectedImageName
            ? selectedImageWithNewVersion
            : image,
        ),
      };
    default:
      return state;
  }
};
