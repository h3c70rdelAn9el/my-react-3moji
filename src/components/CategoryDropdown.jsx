import React from 'react'

function CategoryDropdown({
    selectedCategory,
    categories,
    handleCategoryChange,
}) {
    const filteredCategories = [...categories]

    return (
        <div>
            <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="md:p-[10.5px] p-2 text-xs bg-purple-200 border border-purple-500 rounded-md  md:w-44 w-24 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-600">
                <option value="">All Categories</option>
                {filteredCategories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CategoryDropdown
