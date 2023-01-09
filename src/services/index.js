const date = new Date();

export const fetchSampleImages = async () => {
  const response = await fetch(
    'https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json',
  );

  const sampleImages = await response.json();

  return sampleImages.map((image) => ({
    ...image,
    versions: [
      {
        filters: {},
        id: Number(date),
        initialVersion: true,
      },
    ],
  }));
};
