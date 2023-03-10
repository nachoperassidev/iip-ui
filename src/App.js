import { Box, Flex } from '@chakra-ui/react';

import { useStateContext } from './providers';
import { useSetInitialState } from './hooks';
import Image from './components/Image';
import ImageSelector from './components/ImageSelector';
import ImageActions from './components/ImageActions';
import VersionHistory from './components/VersionHistory';
import BrowseHistoryButton from './components/BrowseHistoryButton';
import ImageUrl from './components/ImageUrl';
import NewImageModal from './components/NewImageModal';

import './App.css';

function App() {
  const [{ images, selectedImageId }] = useStateContext();

  useSetInitialState();

  if (images && selectedImageId)
    return (
      <div className="App">
        <Flex>
          <VersionHistory />
          <Box flexGrow={1}>
            <ImageSelector />
            <Image />
            <BrowseHistoryButton />
            <ImageActions />
            <ImageUrl />
            <NewImageModal />
          </Box>
        </Flex>
      </div>
    );
}

export default App;
