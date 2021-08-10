import React, { useEffect } from 'react';
import useStorage from './hooks/useStorage';

export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);

  console.log('progress:', progress, 'url', url);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);
  return (
    <>
      <div className='progress-bar' style={{ width: progress + '%' }}></div>
      <div className='progress-number'>{Math.round(progress) + '%'}</div>
    </>
  );
}
