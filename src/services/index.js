export const fetchSampleImages = async () => {
  const sampleImagesResponse = await fetch(
    'https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json',
  );

  const sampleImages = await sampleImagesResponse.json();

  const images = {};

  const versions = {};

  sampleImages.forEach((image) => {
    const date = new Date();
    const newVersionId = Number(date);
    const newVersion = {
      id: newVersionId,
      initialVersion: true,
      filters: {},
    };
    versions[newVersionId] = newVersion;
    images[image.name] = {
      ...image,
      versions: [newVersionId],
    };
  });

  return {
    images,
    versions,
  };
};
