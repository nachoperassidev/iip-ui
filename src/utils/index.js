import queryString from 'query-string';

export const buildNewImageVersion = ({
  currentVersion = {},
  newFilter = {},
  isInitialVersion = false,
}) => {
  const date = new Date();

  if (isInitialVersion) {
    return {
      id: Number(date),
      initialVersion: true,
      filters: {},
    };
  }

  return {
    id: Number(date),
    date,
    filters: {
      ...currentVersion.filters,
      ...newFilter,
    },
  };
};

export const buildImageUrl = ({ baseUrl, filters }) =>
  queryString.stringifyUrl({ url: baseUrl, query: filters });
