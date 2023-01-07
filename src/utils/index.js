export const getSelectedImage = (images, selectedImageName) =>
  images?.length &&
  selectedImageName &&
  images.find((image) => image.name === selectedImageName);
