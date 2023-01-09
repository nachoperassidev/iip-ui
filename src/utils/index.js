import queryString from 'query-string';

export const getSelectedImage = (images, selectedImageName) =>
  images.find((image) => image.name === selectedImageName);

export const getSelectedVersion = (image, selectedVersionId) =>
  image.versions.find((version) => version.id === selectedVersionId);

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

export const buildImageUrl = ({ baseUrl, filters }) =>
  queryString.stringifyUrl({ url: baseUrl, query: filters });
