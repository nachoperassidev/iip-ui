import { Box, Button } from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import { actionTypes } from '../../state';

const BrowseHistoryButton = () => {
  const [state, dispatch] = useStateContext();
  return (
    <Box display={{ base: 'block', md: 'none' }} p={4} textAlign="right">
      <Button
        onClick={() => dispatch({ type: actionTypes.openVersionHistory })}
      >
        Browse version history
      </Button>
    </Box>
  );
};

export default BrowseHistoryButton;
