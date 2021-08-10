import React from 'react';
import './Item.scss';

const Item = ({ article }) => {
  const { urlToImage, title, description } = article;
  return (
    <div className="article">
      <img src={urlToImage} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Item;
