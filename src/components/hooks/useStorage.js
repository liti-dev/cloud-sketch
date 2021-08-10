import React from 'react';
import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timeStamp,
} from '../../firebase/config';

export default function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    // Observe state change events such as progress, pause, and resume
    storageRef.put(file).on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
      },
      (err) => {
        setError(err);
      },
      async () => {
        // Handle successful uploads on complete (getting download url in this case)
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp;
        // console.log(timeStamp);
        collectionRef.add({ imgURL: url, createdAt: createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
}
