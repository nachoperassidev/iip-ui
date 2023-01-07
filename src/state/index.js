export const initialState = {
  images: [],
};

export const actionTypes = {
  setImages: 'SET_IMAGES',
  setSelectedImage: 'SET_SELECTED_IMAGE',
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
    default:
      return state;
  }
};
