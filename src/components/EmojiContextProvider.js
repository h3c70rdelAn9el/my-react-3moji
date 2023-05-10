import React, { useState, useEffect, createContext } from 'react'

export const EmojiContext = createContext()

const EmojiContextProvider = (props) => {
    const [emoji, setEmoji] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchEmojis() {
            const response = await fetch('https://emojihub.yurace.pro/api/all')
            const json = await response.json()
            setEmoji(json)
            setIsLoading(false)
        }
        fetchEmojis()
    }, [])

    return (
        <EmojiContext.Provider value={{ emoji, setEmoji }}>
            {isLoading ? (
                <div className="grid h-screen text-xl text-center bg-gray-100 place-items-center">
                    <p>
                        loading...
                        <span>&#8987;</span>
                    </p>
                </div>
            ) : (
                props.children
            )}
        </EmojiContext.Provider>
    )
}

export default EmojiContextProvider
