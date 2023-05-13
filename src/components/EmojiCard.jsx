import React from 'react'
import CopyButton from './CopyButton.jsx'

const EmojiCard = ({ emoji }) => (
    <div
        key={emoji.index}
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
            <CopyButton text={emoji.htmlCode[0]} />
        </div>
    </div>
)

export default EmojiCard
