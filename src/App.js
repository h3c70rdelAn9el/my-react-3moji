import React, { useState } from 'react'
import EmojiList from './components/EmojiList'
import EmojiContextProvider from './components/EmojiContextProvider'

function App() {
    // const [emoji, setEmoji] = useState([])
    // console.log(emoji)
    return (
        <div className="App">
            <h1 className="text-3xl text-center">emoji</h1>
            {/* <EmojiContextProvider value={{ emoji: [], setEmoji: () => {} }}> */}
            <EmojiContextProvider>
                <EmojiList />
            </EmojiContextProvider>
        </div>
    )
}

export default App
