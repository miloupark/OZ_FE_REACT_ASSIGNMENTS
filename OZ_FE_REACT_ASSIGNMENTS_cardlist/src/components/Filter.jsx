import React from 'react';

const Filter = ({ categories, currentCategory, onFilterChange }) => {
    return (
        <div className="filter-container">
            <span>분노 단계:</span>
            <div className="filter-buttons">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`filter-button ${currentCategory === category ? 'active' : ''}`}
                        onClick={() => onFilterChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filter;
