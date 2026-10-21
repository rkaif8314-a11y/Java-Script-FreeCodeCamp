// Select the container that displays the generated story.
const storyContainer = document.querySelector(".story-container");

// Get the buttons for each story genre.
const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");

// Get the paragraph where the selected story will appear.
const resultParagraph = document.getElementById("result");

// Store each story and its matching border color in an object.
// The genre names ("scary", "funny", "adventure") are the keys.
const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#ee4b2b"
  },
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32"
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157"
  }
};

// Display the story and update the container's border color for a genre.
function displayStory(genre) {
  // Check that the requested genre exists before accessing its properties.
  if (storyObj.hasOwnProperty(genre)) {
    // textContent safely replaces the paragraph's text with the selected story.
    resultParagraph.textContent = storyObj[genre].story;

    // Match the story container's border color to the selected genre.
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

// When each button is clicked, call displayStory with its genre key.
scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));
