import './Filter.css'
import React, { useState } from 'react';

const Filter = ({onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const handleFilterChange = (category, subCategory) => {
    console.log('Selected Category:', category);
    console.log('Selected SubCategory:', subCategory);
  
  };
  const handleCategoryClick = (category) => {
    if (selectedCategory && selectedCategory.id === category.id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedSubCategory(null);
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    if (selectedSubCategory && selectedSubCategory.id === subCategory.id) {
      setSelectedSubCategory(null);
    } else {
      setSelectedSubCategory(subCategory);
    }
  };

  const handleApplyFilter = () => {
    onFilterChange(selectedCategory, selectedSubCategory);
  };
  const categories = [
    {
      id: 1,
      name: 'Product type',
      subCategories: [
        { id: 11, name: 'SubCategory 1.1' },
        { id: 12, name: 'SubCategory 1.2' },
      ],
    },
    {
      id: 2,
      name: 'Price',
      subCategories: [
        { id: 21, name: 'SubCategory 2.1' },
        { id: 22, name: 'SubCategory 2.2' },
      ],
    },
    {
      id: 3,
      name: 'Stone type/Color',
      subCategories: [
        { id: 11, name: 'SubCategory 1.1' },
        { id: 12, name: 'SubCategory 1.2' },
      ],
    },
    {
      id: 4,
      name: 'Metal Color',
      subCategories: [
        { id: 11, name: 'SubCategory 1.1' },
        { id: 12, name: 'SubCategory 1.2' },
      ],
    },
    {
      id: 5,
      name: 'Style',
      subCategories: [
        { id: 11, name: 'SubCategory 1.1' },
        { id: 12, name: 'SubCategory 1.2' },
      ],
    },
    {
      id: 6,
      name: 'Category 1',
      subCategories: [
        { id: 11, name: 'SubCategory 1.1' },
        { id: 12, name: 'SubCategory 1.2' },
      ],
    },
    {
      id: 7,
      name: 'Sub Category',
      subCategories: [
        { id: 11, name: 'SubCategory 1.1' },
        { id: 12, name: 'SubCategory 1.2' },
      ],
    },
    {
      id: 8,
      name: 'Metal type',
      subCategories: [
        { id: 11, name: 'SubCategory 1.1' },
        { id: 12, name: 'SubCategory 1.2' },
      ],
    },

  ];

  return (
    <div className='filter-main'>
    <p>filter</p>
      <ul className='filter-category'>
        
        {categories.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {category.name}
            {selectedCategory && selectedCategory.id === category.id && (
              <ul>
                {category.subCategories.map((subCategory) => (
                  <li
                    key={subCategory.id}
                    onClick={() => handleSubCategoryClick(subCategory)}
                    style={{
                      fontWeight:
                        selectedSubCategory && selectedSubCategory.id === subCategory.id
                          ? 'bold'
                          : 'normal',
                    }}
                  >
                    {subCategory.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
  
     
      {/* <button onClick={handleApplyFilter}>Apply Filter</button> */}
    </div>
  );
};

export default Filter;
