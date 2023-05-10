import React from 'react'
import EmojiList from './components/EmojiList'

function App() {
    return (
        <div className="h-screen bg-gray-200 App">
            <h1 className="p-2 text-3xl text-center">Emojis &#128512;</h1>
            <EmojiList />
        </div>
    )
}

export default App
