import React from 'react';

import ImageList from './components/ImageList';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageList />
    </div>
  );
}

export default App;
