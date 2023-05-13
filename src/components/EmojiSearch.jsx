import React from 'react'

function EmojiSearch({ setSearch }) {
    return (
        <input
            type="text"
            placeholder="Search for your emoji..."
            className="z-50 w-full p-2 text-xs bg-purple-200 border border-purple-500 rounded-md md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}

export default EmojiSearch
