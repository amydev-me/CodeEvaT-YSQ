import React, { useState } from 'react';
import '../assets/css/FilterButton.css'; // Import CSS file for filter buttons

function FilterButtons({ categories,onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  }; 
  
  let renenderedButtons = categories.map(but => {
                              return <button key={but}
                                        className={activeFilter === but ? 'filter-button active' : 'filter-button'}
                                        onClick={() => handleFilterClick(but)}>{but}
                                      </button>
                            });

  return (
    <div className="filters">
      { renenderedButtons }
    </div>
  );
}

export default FilterButtons;
