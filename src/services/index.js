export const fetchSampleImages = async () => {
  const response = await fetch(
    'https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json',
  );
  const sampleImages = await response.json();
  return sampleImages;
};
