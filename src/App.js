import { useEffect, useState } from 'react';

import { fetchSampleImages } from './services';

import Image from './components/Image';

import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchSampleImages().then(setImages);
  }, []);

  return (
    <div className="App">
      <Image image={images.length ? images[0] : null} />
    </div>
  );
}

export default App;
