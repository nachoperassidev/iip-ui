import { getSelectedImage } from '../utils';

export const initialState = {
  images: [],
  versionHistoryOpen: false,
};

export const actionTypes = {
  setImages: 'SET_IMAGES',
  setSelectedImage: 'SET_SELECTED_IMAGE',
  addNewImageVersion: 'ADD_NEW_IMAGE_VERSION',
  openVersionHistory: 'OPEN_VERSION_HISTORY',
  closeVersionHistory: 'CLOSE_VERSION_HISTORY',
  setSelectedVersion: 'SET_SELECTED_VERSION',
};

export const mainReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setImages: {
      return {
        ...state,
        images: action.payload,
      };
    }
    case actionTypes.setSelectedImage: {
      const selectedImageName = action.payload;
      const selectedImage = state.images.find(
        (image) => image.name === selectedImageName,
      );
      return {
        ...state,
        selectedImageName: action.payload,
        selectedVersionId: selectedImage.versions[0].id,
      };
    }
    case actionTypes.addNewImageVersion: {
      const newVersion = action.payload;
      const selectedImage = getSelectedImage(
        state.images,
        state.selectedImageName,
      );
      const selectedImageWithNewVersion = {
        ...selectedImage,
        versions: [newVersion, ...(selectedImage.versions || [])],
      };

      return {
        ...state,
        images: state.images.map((image) =>
          image.name === state.selectedImageName
            ? selectedImageWithNewVersion
            : image,
        ),
        selectedVersionId: newVersion.id,
      };
    }
    case actionTypes.openVersionHistory: {
      return {
        ...state,
        versionHistoryOpen: true,
      };
    }
    case actionTypes.closeVersionHistory: {
      return {
        ...state,
        versionHistoryOpen: false,
      };
    }
    case actionTypes.setSelectedVersion: {
      return {
        ...state,
        selectedVersionId: action.payload,
      };
    }
    default:
      return state;
  }
};
