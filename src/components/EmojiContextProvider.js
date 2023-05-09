import React, { useState, useEffect, createContext } from 'react'

export const EmojiContext = createContext()

const EmojiContextProvider = (props) => {
    const [emoji, setEmoji] = useState([])

    useEffect(() => {
        async function fetchEmojis() {
            const response = await fetch('https://emojihub.yurace.pro/api/all')
            const json = await response.json()
            setEmoji(json)
        }
        fetchEmojis()
    }, [])
    // console.log(emoji)

    return (
        <EmojiContext.Provider value={{ emoji, setEmoji }}>
            {props.children}
        </EmojiContext.Provider>
    )
}

export default EmojiContextProvider
