import React from 'react'
import EmojiList from './components/EmojiList'

function App() {
    return (
        <div className="App bg-gray-200 h-screen">
            <h1 className="text-3xl text-center p-2">Emojis &#128512;</h1>
            <EmojiList />
        </div>
    )
}

export default App
