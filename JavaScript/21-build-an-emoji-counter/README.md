# Build an Emoji Counter

A small JavaScript DOM project that increases the count on an emoji button when it is clicked, up to a maximum of 10.

## Concepts practiced

- **DOM selection:** `querySelectorAll()` selects all emoji buttons, and `querySelector()` finds the count element inside a specific button.
- **String methods:** `split("/")` extracts the current count from text such as `"3/10"`.
- **Type conversion:** The unary `+` converts the extracted count from a string to a number.
- **Early return:** `if (currCount === 10) return;` prevents the count from increasing past the limit.
- **Template literals:** `\u0060${nextCount}/10\u0060` formats the updated count.
- **Event listeners:** Each button listens for clicks and updates only its own count.
- **forEach and arrow functions:** These attach the same click behavior to every selected button.

## How it works

1. JavaScript selects all elements with the `.emoji-btn` class.
2. Each button receives a click event listener.
3. On click, `updateCount(btn)` finds that button's `.count` element and reads the number before the slash.
4. If the count is already 10, the function stops. Otherwise, it increases the count by one and displays the new value.

## HTML requirement

Each emoji button should have the `.emoji-btn` class and contain an element with the `.count` class whose text begins in a format such as `0/10`.
