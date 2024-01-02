import React from "react";
import useApi from "../hooks/useApi";
import ImageItem from "./ImageItem";

const DisplayGifs = ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=0EG7nDz1WoDqlRaaqL1lwRkAl4t3F2fy&q=${category}&limit=5`;
  const { loading, data } = useApi(url);

  return (
    <div className="container-gifs">
      <h2>display gifs</h2>
      {data &&
        data.map((img) => (
          <ImageItem
            key={img.id}
            title={img.title}
            url={img.images.downsized_medium.url}
          />
        ))}
    </div>
  );
};

export default DisplayGifs;
