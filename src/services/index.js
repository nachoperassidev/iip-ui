import { buildNewImageVersion } from '../utils';

export const fetchSampleImages = async () => {
  const sampleImagesResponse = await fetch(
    'https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json',
  );

  const sampleImages = await sampleImagesResponse.json();

  const images = {};

  const versions = {};

  sampleImages.forEach((image) => {
    const initialVersion = buildNewImageVersion({ isInitialVersion: true });
    versions[initialVersion.id] = initialVersion;
    images[image.name] = {
      ...image,
      versions: [initialVersion.id],
    };
  });

  return {
    images,
    versions,
  };
};
