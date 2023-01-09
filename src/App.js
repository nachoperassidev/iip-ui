import { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { useStateContext } from './providers';
import { fetchSampleImages } from './services';
import { actionTypes } from './state';
import Image from './components/Image';
import ImageSelector from './components/ImageSelector';
import CurrentImageActions from './components/CurrentImageActions';
import VersionHistory from './components/VersionHistory';
import BrowseHistoryButton from './components/BrowseHistoryButton';

import './App.css';

function App() {
  const [{ images }, dispatch] = useStateContext();

  useEffect(() => {
    if (!images) {
      fetchSampleImages().then(({ images, versions }) =>
        dispatch({
          type: actionTypes.setImages,
          payload: { images, versions },
        }),
      );
    }
  }, [dispatch, images]);

  return (
    <div className="App">
      <Flex>
        <VersionHistory />
        <Box flexGrow={1}>
          <ImageSelector />
          <Image />
          <BrowseHistoryButton />
          <CurrentImageActions />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
