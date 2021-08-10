import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';

const Article = ({ match, location }) => {
  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const res = await axios.get(        
        `https://newsapi.org/v2/top-headlines?country=kr${
          location.pathname === '/all'
            ? ''
            : `&category=${location.pathname.slice(1, location.pathname.length)}`
        }&apiKey=01013e304c2f4eecae15ab8ea401a3ae`,
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, [location]);
  return (
    <div>
      <div>
        {data && data.articles.map((article) => <Item article={article} />)}
      </div>
    </div>
  );
};

export default Article;
