** Documentation **

1.  Created a React app using CRA.
    -   (wouldv'e liked to use Vite, but was having some issues locally).
2.  Installed TailwindCSS, made tailwind config, added the css modules, then import file.
3.  Created a React component named EmojiContextProvider which would initialize the createContext function.
    -   I put this file in the components folder, although I am aware that for more files it is more useful to put in a 'context' folder.
4.  Made use of the useEffect hook to fetch the data from the API of emojis.
5.  Stored the data in the context state.
6.  Created an EmojiList component which would consume the context from the EmojiContextProvider using the useContext hook.
7.  Created a search input on EmojiList component and bound the value to the state variable in the context, allowing the input to update the results in real time.
8.  Made use of the useMemo hook to store the filtered list of emojis.
9.  Continue to style using TailwindCSS.
10. Made an App component, and wrapped the EmojiContextProvider around it to be able to use the context from the provider.
11. Placed the EmojiList inside the App component.
    -   This is to show how the context provider will pass props successfully without having to pass through each component (prop drilling).

If more time was alloted, I feel the app could be further improved by adding a 'copy' function for the HTML code, for users to be able to use. And I would perhaps add a modal when selecting an emoji to display it bigger and apart from others.
