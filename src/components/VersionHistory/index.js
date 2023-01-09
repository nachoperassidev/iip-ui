import React from 'react';
import { Box, Drawer, DrawerContent } from '@chakra-ui/react';

import { useStateContext } from '../../providers';
import { actionTypes } from '../../state';
import VersionHistoryContent from './VersionHistoryContent';

const VersionHistory = () => {
  const [{ versionHistoryOpen }, dispatch] = useStateContext();

  return (
    <Box minH="100vh">
      <VersionHistoryContent
        onClose={() => dispatch({ type: actionTypes.closeVersionHistory })}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={versionHistoryOpen}
        placement="left"
        onClose={() => dispatch({ type: actionTypes.closeVersionHistory })}
        returnFocusOnClose={false}
        size="full"
      >
        <DrawerContent>
          <VersionHistoryContent
            onClose={() => dispatch({ type: actionTypes.closeVersionHistory })}
          />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default VersionHistory;
