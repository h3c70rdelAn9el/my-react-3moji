import React, { useRef, useState } from 'react'

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false)
    const inputRef = useRef(null)

    const handleCopy = () => {
        inputRef.current.select()
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 1500)
        })
    }

    return (
        <div className="flex">
            <input
                className="text-sm bg-transparent border-b border-purple-500 opacity-75 focus:outline-none"
                type="text"
                value={text}
                readOnly
                ref={inputRef}
            />
            <button
                className="ml-2 text-xs text-purple-600 focus:outline-none"
                onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}

export default CopyButton
