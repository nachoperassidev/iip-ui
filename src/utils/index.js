export const getSelectedImage = (images, selectedImageName) =>
  images.find((image) => image.name === selectedImageName);
