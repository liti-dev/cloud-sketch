import React from 'react';
import useStorage from './components/hooks/useStorage';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className='App'>
      <Title />
      <UploadForm />
    </div>
  );
}

export default App;
