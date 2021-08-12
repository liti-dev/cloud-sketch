import React, { useEffect } from 'react';
import useStorage from './hooks/useStorage';

export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);

  console.log('progress:', progress, 'url', url);
  // after upload success, progress bar disappears
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div className='progress-bar' style={{ width: progress + '%' }}></div>
      <div className='progress-number'>{Math.round(progress) + '%'}</div>
    </>
  );
}
