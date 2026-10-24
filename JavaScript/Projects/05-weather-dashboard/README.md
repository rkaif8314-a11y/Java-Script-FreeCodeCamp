# FreeCodeCamp JavaScript Project 5: Weather Dashboard

A responsive weather dashboard that lets a user choose a city and fetch current weather details from the FreeCodeCamp Weather API.

## Project files

- `index.html` — accessible page structure, city dropdown, and weather result elements.
- `styles.css` — responsive dark dashboard styling, grid layout, focus states, and mobile adjustments.
- `script.js` — API request, error handling, and updates to the weather display.
- `README.md` — project guide and quick revision notes.

## Features

- Choose New York, Los Angeles, Chicago, Paris, Tokyo, or London.
- Fetch current weather when the button is clicked.
- Display city name, condition, icon, temperature, feels-like temperature, humidity, wind speed, and wind gust.
- Handle request errors with a user-facing alert and console logging.
- Show fallback text when optional API fields are missing.
- Use a responsive layout and visible keyboard focus styles.

## Learning concepts — quick revision

| Concept | What it means in this project |
| --- | --- |
| DOM selection | `getElementById()` finds HTML elements so JavaScript can read or update them. |
| Constants and variables | `const` stores references and values that are not reassigned; `let` is useful when a variable must be reassigned. |
| Functions and parameters | `getWeather(city)` and `showWeather(city)` accept a city value and split the work into separate tasks. |
| Async/await | Lets asynchronous code be written in a readable, step-by-step style while waiting for API results. |
| Fetch API | `fetch(url)` sends an HTTP request and returns a Promise for the response. |
| Promises | Represent work that may finish later, such as a network request or parsing JSON. |
| HTTP status checks | `response.ok` checks whether the response status indicates success before parsing its body. |
| JSON parsing | `response.json()` reads the response body and converts JSON text into JavaScript data. |
| try...catch and throw | `throw new Error(...)` signals a failed HTTP response; `catch` handles errors from the request or parsing. |
| URL encoding | `encodeURIComponent(city)` safely encodes the selected city for a URL path. |
| Optional chaining `?.` | Safely reads nested properties such as `data.weather?.[0]?.main` when an intermediate value may be missing. |
| Nullish coalescing `??` | Supplies a fallback only for `null` or `undefined`, unlike `||`, which also replaces values such as `0` and an empty string. |
| Early return | Stops the handler when no city is selected or stops rendering when the request fails. |
| Event listeners | `addEventListener("click", ...)` runs the callback when the user clicks the button. |
| DOM updates | `textContent`, `src`, and `alt` update the displayed values and weather icon. |
| Template literals | Backticks and `${...}` insert the city and status into strings. |
| CSS Flexbox and Grid | Flexbox aligns the main layout; Grid arranges the weather detail cards in two columns. |
| Responsive CSS | `@media` adjusts padding and spacing on small screens; `clamp()` makes font sizes adapt to the viewport. |
| Accessibility | The label is linked to the dropdown, `aria-live` announces updates, decorative icons are hidden from assistive technology, and focus outlines support keyboard users. |

## How the JavaScript flow works

1. Select the HTML elements once at the start.
2. The click handler reads the selected city from `citySelect.value`.
3. If no city is selected, an early return prevents a request.
4. `showWeather(city)` calls `getWeather(city)`.
5. `getWeather()` builds the URL, fetches the API response, checks the HTTP status, parses JSON, and catches errors.
6. `showWeather()` handles a failed result or updates the text and icon elements from the returned object.

## Run locally

Keep `index.html`, `styles.css`, and `script.js` in the same directory. Open `index.html` in a browser and choose a city. An internet connection is required for the API request and weather icon.

## Notes and limitations

- The dashboard depends on the FreeCodeCamp weather proxy and the availability of its service.
- A successful response can still omit individual properties, so the code uses optional chaining and fallback values.
- This project is for learning asynchronous JavaScript and API integration; it is not a forecast or emergency-alert service.
