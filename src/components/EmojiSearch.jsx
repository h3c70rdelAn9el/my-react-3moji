import React from 'react'

function EmojiSearch({ setSearch }) {
    return (
        <div className="sticky top-0 flex flex-row items-center justify-center gap-4 p-3">
            <input
                type="text"
                placeholder="Search for your emoji..."
                className="w-5/6 p-2 text-xs bg-purple-200 border border-purple-500 rounded-md md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default EmojiSearch
