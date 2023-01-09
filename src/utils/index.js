import queryString from 'query-string';

export const buildNewImageVersion = (currentVersion, newFilter) => {
  console.log('current: ', currentVersion);
  console.log('new: ', newFilter);
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
