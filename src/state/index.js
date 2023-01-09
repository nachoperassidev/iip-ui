export const initialState = {
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
      const { images, versions, selectedImageId } = action.payload;
      return {
        ...state,
        images: {
          ...images,
          allIds: Object.keys(images),
        },
        versions,
        selectedImageId,
      };
    }
    case actionTypes.setSelectedImage: {
      const { images } = state;
      const selectedImageId = action.payload;
      const selectedImage = images[selectedImageId];

      return {
        ...state,
        selectedImageId,
        selectedVersionId: selectedImage.versions[0],
      };
    }
    case actionTypes.addNewImageVersion: {
      const { images, selectedImageId, versions } = state;
      const newVersion = action.payload;
      const selectedImage = images[selectedImageId];

      return {
        ...state,
        images: {
          ...images,
          [selectedImageId]: {
            ...selectedImage,
            versions: [newVersion.id].concat(selectedImage.versions || []),
          },
        },
        versions: {
          ...versions,
          [newVersion.id]: newVersion,
        },
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
