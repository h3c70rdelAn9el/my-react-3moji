import React, { useContext } from 'react'
import { EmojiContext } from './EmojiContextProvider.js'

function EmojiList() {
    const { emoji, setEmoji } = useContext(EmojiContext)
    // console.log('emoji', emoji)

    return (
        <div className="emoji-list">
            <div className="grid grid-cols-2 gap-4">
                {emoji.map((emoji) => (
                    <div
                        key={emoji.id}
                        className="flex flex-col items-center justify-center">
                        <span className="text-xs">{emoji.category}</span>
                        <span
                            className="text-5xl"
                            dangerouslySetInnerHTML={{ __html: emoji.htmlCode }}
                        />
                        <span className="text-xs">{emoji.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EmojiList
