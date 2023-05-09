import React, { useContext, useMemo, useState } from 'react'
import { EmojiContext } from './EmojiContextProvider.js'

function EmojiList() {
    const { emoji, setEmoji } = useContext(EmojiContext)
    const [search, setSearch] = useState('')
    // console.log('emoji', emoji)

    const filteredEmoji = useMemo(() => {
        return emoji.filter((emoji) => {
            return (
                emoji.name.toLowerCase().includes(search.toLowerCase()) ||
                emoji.category.toLowerCase().includes(search.toLowerCase()) ||
                emoji.htmlCode[0].toLowerCase().includes(search.toLowerCase())
            )
        })
    }, [search, emoji])

    return (
        <div className="emoji-list max-w-5xl w-5/6 bg-gray-200 mx-auto shadow-lg shadow-purple-500 rounded-md h-[700px] overflow-scroll relative">
            {/* make the search */}
            <div className="flex flex-row justify-center items-center gap-4 p-3 sticky top-0">
                {/* make the follwing input fixed */}

                <input
                    type="text"
                    placeholder="Search for your emoji - by name, category, or HTML code"
                    className="border border-purple-500 rounded-md p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-purple-200 text-sm md:block hidden"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Search by name, category, or HTML code"
                    className="border border-purple-500 rounded-md p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-purple-200 text-xs md:hidden block"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <p className="text-sm text-gray-500 ml-16">
                {filteredEmoji.length} emojis!
            </p>
            <div className="flex flex-row flex-wrap gap-4 p-3 mt-4">
                {filteredEmoji.map((emoji) => (
                    <div
                        key={emoji.id}
                        className="flex flex-col border border-purple-500 w-60 rounded-md p-4 mx-auto shadow-lg bg-purple-300">
                        <span
                            className="text-5xl text-center"
                            dangerouslySetInnerHTML={{
                                __html: emoji.htmlCode[0],
                            }}
                        />
                        <div className="name flex flex-col text-sm pt-2 text-left">
                            <p className="text-xs font-bold">Emoji Name:</p>
                            <p className="text-sm">{emoji.name}</p>
                        </div>
                        {/* <div className="w-1/2 h-1 bg-purple-400 mx-auto" /> */}
                        <div className="emoji-category">
                            <div className="name flex flex-col text-sm pt-2 text-left">
                                <p className="text-xs font-bold">Category:</p>
                                <p className="text-sm">{emoji.category}</p>
                            </div>
                        </div>
                        <div className="emoji-html-code">
                            <div className="name flex flex-col text-sm pt-2 text-left">
                                <p className="text-xs font-bold">HTML:</p>
                                <p className="text-sm">{emoji.htmlCode[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EmojiList
