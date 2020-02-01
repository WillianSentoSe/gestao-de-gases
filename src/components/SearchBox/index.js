import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './styles.css';

const SearchBox = () => (
    <div className="search-box">
        <input type="text"/>
        <button><FaSearch /></button>
    </div>
);

export default SearchBox;