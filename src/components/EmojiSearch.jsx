import React, { useRef } from 'react'

function EmojiSearch({ setSearch }) {
    const ref = useRef(null)

    const onClear = () => {
        ref.current.value = ''
        setSearch('')
    }

    return (
        <div className="relative">
            <input
                ref={ref}
                type="text"
                placeholder="Search for your emoji..."
                className="z-50 w-full p-2 text-xs bg-purple-200 border border-purple-500 rounded-md md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                onClick={onClear}
                className="absolute w-6 h-6 text-sm text-black duration-200 bg-purple-300 border border-purple-400 rounded-full right-2 top-1.5 md:top-2 focus:outline-none hover:bg-purple-400">
                X
            </button>
        </div>
    )
}

export default EmojiSearch
