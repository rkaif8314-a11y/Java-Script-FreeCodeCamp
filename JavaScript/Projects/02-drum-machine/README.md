# FreeCodeCamp JavaScript Project 2: Drum Machine

A browser-based drum machine with nine sound pads. Click a pad or press its keyboard key to play a drum sound, show the sound name, and briefly highlight the pad.

## Project files

- `index.html` — page structure, nine drum-pad buttons, audio clips, and display.
- `styles.css` — page layout, grid, colors, and active-pad effects.
- `script.js` — audio playback, click handling, keyboard handling, and display updates.

## Controls

| Key | Sound |
| --- | --- |
| Q | Heater-1 |
| W | Heater-2 |
| E | Heater-3 |
| A | Heater-4 |
| S | Clap |
| D | Open-HH |
| Z | Kick-n-Hat |
| X | Kick |
| C | Closed-HH |

You can also click any of the nine pads with your mouse.

## JavaScript concepts practised

- **DOM selection:** `querySelectorAll()`, `getElementById()`, and `querySelector()`.
- **Functions:** `playDrum()`, `flashPad()`, and `triggerPad()) separate responsibilities and avoid repeating code.
- **Events:** `addEventListener()` responds to clicks and keyboard presses.
- **Audio control:** `currentTime = 0` restarts a clip before calling `play()`.
- **DOM traversal:** `closest(".drum-pad")` finds the button that contains a matching audio element.
- **Class manipulation:** `classList.add()` and `classList.remove()` apply and remove the visual highlight.
- **Guard clauses:** The keyboard handler uses an early `return` when the pressed key does not match a drum audio element.
- **Timers:** `setTimeout()` removes the active visual state after 120 milliseconds.

## How the project works

1. The script selects all drum-pad buttons and the sound display.
2. Clicking a pad calls `triggerPad(pad)`.
3. The audio inside that pad is restarted and played.
4. The display shows the pad's ID, and the pad briefly receives the `.active` CSS class.
5. A keyboard event converts the pressed key to uppercase and looks for an audio element with that ID. If found, it locates the containing pad and triggers it.

## Run locally

Keep all three files in the same folder, then open `index.html` in a browser. An internet connection is needed to load the FreeCodeCamp-hosted audio files.

## Revision note

The `data-key` attributes document the intended keyboard keys in the HTML; the current JavaScript keyboard handler matches the key against each audio element's ID. The preview relies on the browser's audio support and availability of the linked sound files.
