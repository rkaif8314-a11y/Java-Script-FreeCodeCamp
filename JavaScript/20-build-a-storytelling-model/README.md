# Build a Storytelling Model

A JavaScript DOM project that displays a story when the user clicks a genre button: scary, funny, or adventure.

## Concepts practiced

- **DOM selection:** `querySelector()` and `getElementById()` select the elements from the HTML page.
- **Object data:** `storyObj` stores each genre's story and border color under a genre key.
- **Functions and parameters:** `displayStory(genre)` reuses the same logic for every genre.
- **Property checking:** `hasOwnProperty()` checks that the requested genre exists before its data is accessed.
- **DOM updates:** `textContent` displays the story, while `style.borderColor` changes the container's border color.
- **Event listeners:** `addEventListener("click", ...)` responds to clicks on the three buttons.
- **Arrow functions:** Each button uses a short arrow function to pass its genre to `displayStory()`.

## Files

- `script.js` — story data, event listeners, and display logic.

## How it works

1. The page loads and JavaScript selects the story container, buttons, and result paragraph.
2. A user clicks one of the genre buttons.
3. The click handler passes the genre key to `displayStory()`.
4. The function displays the matching story and applies its border color.

The HTML page must contain the matching selectors: `.story-container`, `#scary-btn`, `#funny-btn`, `#adventure-btn`, and `#result`.
