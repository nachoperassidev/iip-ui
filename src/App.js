import { useEffect } from 'react';

import { useStateContext } from './providers';
import { fetchSampleImages } from './services';
import { actionTypes } from './state';
import Image from './components/Image';
import ImageSelector from './components/ImageSelector';
import CurrentImageActions from './components/CurrentImageActions';

import './App.css';

function App() {
  const [{ images }, dispatch] = useStateContext();

  useEffect(() => {
    if (!images.length) {
      fetchSampleImages().then((images) =>
        dispatch({ type: actionTypes.setImages, payload: images }),
      );
    }
  }, [dispatch, images]);

  return (
    <div className="App">
      <ImageSelector />
      <Image />
      <CurrentImageActions />
    </div>
  );
}

export default App;
