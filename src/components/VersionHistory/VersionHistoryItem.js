import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Box, Card, Tag, Text } from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import { actionTypes } from '../../state';

dayjs.extend(relativeTime);

const VersionHistoryItem = ({
  version,
  isCurrentVersion,
  isSelectedVersion,
  onClick,
}) => {
  const [state, dispatch] = useStateContext();
  const formattedFilters = Object.keys(version.filters).map((filterName) => ({
    filterName,
    filterValue: version.filters[filterName],
  }));

  const handleSelectVersionHistory = () => {
    dispatch({ type: actionTypes.setSelectedVersion, payload: version.id });
    onClick();
  };

  return (
    <Card
      p={4}
      mb={4}
      bg={isSelectedVersion ? 'blue.100' : 'white'}
      cursor="pointer"
      onClick={handleSelectVersionHistory}
    >
      {isCurrentVersion && (
        <Box>
          <Tag size="sm" bg="blue.500" color="white" fontWeight="normal">
            Current version
          </Tag>
        </Box>
      )}
      {formattedFilters.map(({ filterName, filterValue }) => (
        <Text key={filterName}>{`${filterName}: ${filterValue}`}</Text>
      ))}
      <Text fontSize="xs" textAlign="right" fontStyle="italic">
        {version.initialVersion
          ? 'Initial version'
          : dayjs(version.date).fromNow()}
      </Text>
    </Card>
  );
};

export default VersionHistoryItem;
