import React, { useContext, useMemo, useState, useEffect } from 'react'
import { EmojiContext } from './EmojiContextProvider.js'
import EmojiSearch from './EmojiSearch.jsx'
import CategoryDropdown from './CategoryDropdown.jsx'
import EmojiCard from './EmojiCard.jsx'

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
        <div className="main-container">
            <div className="sticky top-0 flex flex-row items-center justify-between w-5/6 p-3 mx-auto z-[99999]">
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
                {filteredEmoji.map((emoji, index) => (
                    <EmojiCard key={index} emoji={emoji} />
                ))}
            </main>
        </div>
    )
}

export default EmojiList
