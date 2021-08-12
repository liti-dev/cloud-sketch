import React from 'react';
import useFirestore from './hooks/useFirestore';

export default function ImageList() {
  const { docs } = useFirestore('images');
  console.log(docs);
  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <div key={doc.id}>
            <img src={doc.imgURL} alt='cloud' />
          </div>
        ))}
    </div>
  );
}
