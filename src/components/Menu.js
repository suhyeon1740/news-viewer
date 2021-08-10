import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/all">all</Link>
      </li>
      <li>
        <Link to="/business">business</Link>
      </li>
      <li>
        <Link to="/entertainment">entertainment</Link>
      </li>
      <li>
        <Link to="/health">health</Link>
      </li>
      <li>
        <Link to="/science">science</Link>
      </li>
      <li>
        <Link to="/sports">sports</Link>
      </li>
      <li>
        <Link to="/technology">technology</Link>
      </li>
    </ul>
  );
};

export default Menu;
