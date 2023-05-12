import React, { useContext, useMemo, useState, useRef } from 'react'
import { EmojiContext } from './EmojiContextProvider.js'

function EmojiList() {
    const { emoji } = useContext(EmojiContext)
    const searchRef = useRef('')
    const [search, setSearch] = useState(searchRef.current)

    const filteredEmoji = useMemo(() => {
        const searchTerms = search
            .toLowerCase()
            .split(' ')
            .filter((term) => term.trim() !== '')
        return emoji.filter((emoji) => {
            return searchTerms.every(
                (term) =>
                    emoji.name.toLowerCase().includes(term) ||
                    emoji.category.toLowerCase().includes(term) ||
                    emoji.htmlCode[0].toLowerCase().includes(term)
            )
        })
    }, [search, emoji])

    return (
        <div className="relative w-5/6 max-w-5xl mx-auto overflow-scroll bg-gray-500 rounded-md shadow-lg emoji-list shadow-purple-500 h-3/4">
            <div className="sticky top-0 flex flex-row items-center justify-center gap-4 p-3">
                <input
                    type="text"
                    placeholder="Search for your emoji - by name, category, or HTML code"
                    className="hidden w-5/6 p-2 text-sm bg-purple-200 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent md:block"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Search by name, category, or HTML code"
                    className="block w-5/6 p-2 text-xs bg-purple-200 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent md:hidden"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <p className="ml-16 text-sm text-gray-800">
                {filteredEmoji.length === 0
                    ? 'No emojis found'
                    : `Here are your ${filteredEmoji.length} emojis!`}
            </p>
            <div className="flex flex-row flex-wrap gap-4 p-3 mt-4">
                {filteredEmoji.map((emoji) => (
                    <div
                        key={emoji.id}
                        emoji={emoji}
                        className="flex flex-col p-4 mx-auto bg-purple-300 border border-purple-500 rounded-md shadow-lg w-60">
                        <span
                            className="text-5xl text-center"
                            dangerouslySetInnerHTML={{
                                __html: emoji.htmlCode[0],
                            }}
                        />
                        <div className="flex flex-col pt-2 text-sm text-left emoji-name">
                            <p className="text-xs font-bold">Emoji Name:</p>
                            <p className="text-sm">{emoji.name}</p>
                        </div>
                        <div className="flex flex-col pt-2 text-sm text-left emoji-category">
                            <p className="text-xs font-bold">Category:</p>
                            <p className="text-sm">{emoji.category}</p>
                        </div>
                        <div className="flex flex-col pt-2 text-sm text-left emoji-html-code">
                            <p className="text-xs font-bold">HTML:</p>
                            <p className="text-sm">{emoji.htmlCode[0]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EmojiList
