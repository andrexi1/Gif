import React from 'react'

const ImageItem = ({title, url}) => {
  return (
    <div>
      {title} <br />
      {url}
      <img src={url} alt={title} />
      <h2>image ImageItem</h2>
    </div>
  );
}

export default ImageItem;