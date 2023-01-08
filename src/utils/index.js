export const getSelectedImage = (images, selectedImageName) =>
  images.find((image) => image.name === selectedImageName);

export const buildNewImageVersion = (currentVersion, newFilter) => {
  const date = new Date();

  return {
    id: Number(date),
    date,
    filters: {
      ...currentVersion?.filters,
      ...newFilter,
    },
  };
};
