import React from 'react';

import { fetchImageList } from '../../utils';

import './memories.css';

export const Memories = () => {
  const files = fetchImageList();    
  
  return (
    <div className="page">
      {Object.keys(files).map(file => <img src={files[file]} className='img-preview' alt={file} key={file} />)}
    </div>
  );
}

export default Memories;
