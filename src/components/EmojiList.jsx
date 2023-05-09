import React, { useContext } from 'react'
import { EmojiContext } from './EmojiContextProvider.js'

function EmojiList() {
    const { emoji, setEmoji } = useContext(EmojiContext)
    console.log('emoji', emoji)

    return (
        <div className="emoji-list max-w-5xl w-5/6 bg-gray-200 mx-auto shadow-lg shadow-purple-500 rounded-md h-[700px] overflow-scroll">
            <div className="flex flex-row flex-wrap gap-4 p-3">
                {emoji.map((emoji) => (
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
