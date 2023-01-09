import { Box, Text } from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import { actionTypes } from '../../state';

const PreviousVersionActions = () => {
  const [state, dispatch] = useStateContext();

  return (
    <Box p={4} textAlign="right">
      <Text
        as="button"
        cursor="pointer"
        fontStyle="italic"
        color="gray.500"
        onClick={() =>
          dispatch({
            type: actionTypes.restoreVersion,
          })
        }
      >
        Restore this version
      </Text>
    </Box>
  );
};

export default PreviousVersionActions;
