import { useEffect, useState } from 'react';

import { fetchSampleImages } from './services';
import { getSelectedImage } from './utils';

import Image from './components/Image';
import ImageSelector from './components/ImageSelector';

import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImageName, setSelectedImageName] = useState();

  useEffect(() => {
    fetchSampleImages().then(setImages);
  }, []);

  useEffect(() => {
    images.length && !selectedImageName && setSelectedImageName(images[0].name);
  }, [images, selectedImageName]);

  return (
    <div className="App">
      <ImageSelector
        images={images}
        selectedImageName={selectedImageName}
        setSelectedImageName={setSelectedImageName}
      />
      <Image image={getSelectedImage(images, selectedImageName)} />
    </div>
  );
}

export default App;
