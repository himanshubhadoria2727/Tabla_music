// SearchCategory.jsx

import React, { useState } from 'react';
import { Select } from 'antd';

const SearchCategory = ({ title, options, onCategoryChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    console.log('selected', value);
    setSelectedValue(value);
    onCategoryChange(value); // Call the callback function with the selected value
  };

  return (
    <>
      {title && <label>{title}</label>}
      <Select
        defaultValue="Select Category"
        placeholder="Search"
        onChange={handleChange}
        options={options}
      />
    </>
  );
};

export default SearchCategory;
