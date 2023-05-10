import React from 'react'
import EmojiList from './components/EmojiList'

function App() {
    return (
        <div className="h-screen bg-gray-200 App">
            <h1 className="p-2 text-3xl text-center">Emojis &#128512;</h1>
            <EmojiList />
            <a
                href="https://github.com/h3c70rdelAn9el/my-react-3moji"
                target="_blank"
                rel="noreferrer"
                className="fixed text-xs bottom-1 left-10">
                GitHub Repo
            </a>
        </div>
    )
}

export default App
