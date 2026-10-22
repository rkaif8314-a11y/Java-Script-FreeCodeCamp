/* ==================================================
   PART 1: SELECT HTML ELEMENTS
   ================================================== */

// Select all nine drum-pad buttons.
// querySelectorAll() returns a collection of matching elements.
const drumPads = document.querySelectorAll(".drum-pad");

// Select the paragraph where the triggered sound name appears.
const display = document.getElementById("display");


/* ==================================================
   PART 2: PLAY THE AUDIO
   ================================================== */

// This function receives a drum-pad button and plays
// the audio element contained inside that button.
function playDrum(pad) {

  // Find the audio element inside the selected drum pad.
  const audio = pad.querySelector(".clip");

  // Stop the clip from its previous position and restart it.
  // This lets the same sound play immediately on repeated triggers.
  audio.currentTime = 0;

  // Ask the browser to play the selected audio clip.
  audio.play();
}


/* ==================================================
   PART 3: FLASH THE DRUM PAD
   ================================================== */

// This function briefly highlights a drum pad when triggered.
function flashPad(pad) {

  // Add the "active" CSS class to highlight the pad.
  pad.classList.add("active");

  // Schedule the following code to run after 120 milliseconds.
  setTimeout(() => {

    // Remove the class so the pad returns to its normal style.
    pad.classList.remove("active");

  }, 120);
}


/* ==================================================
   PART 4: HANDLE A TRIGGERED DRUM PAD
   ================================================== */

// This reusable function combines all actions needed
// when a drum pad is triggered by a click or keyboard.
function triggerPad(pad) {

  // Play the audio clip associated with this pad.
  playDrum(pad);

  // Display the unique ID describing the selected sound.
  // Example: "Heater-1", "Clap", or "Kick".
  display.textContent = pad.id;

  // Briefly highlight the selected pad.
  flashPad(pad);
}


/* ==================================================
   PART 5: HANDLE MOUSE CLICKS
   ================================================== */

// Loop through all nine drum-pad buttons.
drumPads.forEach((pad) => {

  // Attach a click event listener to the current pad.
  pad.addEventListener("click", () => {

    // Play the sound, update the display, and flash the pad.
    triggerPad(pad);

  });
});


/* ==================================================
   PART 6: HANDLE KEYBOARD PRESSES
   ================================================== */

// Listen for keyboard presses anywhere on the document.
document.addEventListener("keydown", (event) => {

  // Convert the pressed key to uppercase.
  // This allows both "q" and "Q" to trigger the Q sound.
  const key = event.key.toUpperCase();

  // Find the audio element whose ID matches the pressed key.
  // The audio elements use IDs Q, W, E, A, S, D, Z, X, and C.
  const audio = document.getElementById(key);

  // If no matching audio clip exists, or the element
  // isn't a drum clip, stop processing this key press.
  if (!audio || !audio.classList.contains("clip")) {
    return;
  }

  // Find the drum-pad button containing this audio element.
  const pad = audio.closest(".drum-pad");

  // Trigger the pad only if its parent button was found.
  if (pad) {

    // Play the sound, update the display, and flash the pad.
    triggerPad(pad);

  }
});
