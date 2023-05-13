import React, { useContext, useMemo, useState, useEffect } from 'react'
import { EmojiContext } from './EmojiContextProvider.js'
import EmojiSearch from './EmojiSearch.jsx'
import CategoryDropdown from './CategoryDropdown.jsx'

function EmojiList() {
    const { emoji } = useContext(EmojiContext)
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const uniqueCategories = Array.from(
            new Set(emoji.map((emoji) => emoji.category))
        )
        setCategories(uniqueCategories)
    }, [emoji])

    const filteredEmoji = useMemo(() => {
        const searchTerms = search
            .toLowerCase()
            .split(' ')
            .filter((term) => term.trim() !== '')

        return emoji
            .filter((emoji) => {
                return searchTerms.every(
                    (term) =>
                        emoji.name.toLowerCase().includes(term) ||
                        emoji.category.toLowerCase().includes(term) ||
                        emoji.htmlCode[0].toLowerCase().includes(term)
                )
            })
            .filter((emoji) => {
                if (selectedCategory) {
                    return emoji.category
                        .toLowerCase()
                        .includes(selectedCategory.toLowerCase())
                }
                return true
            })
    }, [search, emoji, selectedCategory])

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    return (
        <div className="relative flex flex-col w-5/6 max-w-5xl mx-auto overflow-scroll bg-gray-500 rounded-md shadow-lg emoji-list shadow-purple-500 h-3/4">
            <div className="sticky top-0 flex flex-row items-center justify-between w-5/6 p-3 mx-auto">
                <div className="w-full">
                    <EmojiSearch setSearch={setSearch} />
                </div>
                <div className="mx-2 md:w-1/3">
                    <CategoryDropdown
                        selectedCategory={selectedCategory}
                        categories={categories}
                        handleCategoryChange={handleCategoryChange}
                        emoji={filteredEmoji}
                    />
                </div>
            </div>
            <p className="w-5/6 mx-auto text-xs text-purple-200 md:text-sm md:pt-1">
                {filteredEmoji.length === 0
                    ? 'No emojis found'
                    : `Here are your ${filteredEmoji.length} emojis!`}
            </p>

            <main className="flex flex-row flex-wrap gap-4 p-3 mt-4">
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
            </main>
        </div>
    )
}

export default EmojiList
