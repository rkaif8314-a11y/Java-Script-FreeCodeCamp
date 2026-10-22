/*
  VOTING SYSTEM USING MAP AND SET

  Map stores each voting option as a key.
  Each option's value is a Set containing voter IDs.
  Set prevents the same voter from voting twice
  for the same option.
*/


// STEP 1: CREATE THE POLL

// Create an empty Map to store voting options and their voters.
const poll = new Map();


// STEP 2: DEFINE THE addOption() FUNCTION

// This function accepts an option name and adds it to the poll.
function addOption(option) {

  // Check whether the option is empty or contains only spaces.
  if (!option || !option.trim()) {

    // Return an error message if the option is empty.
    return "Option cannot be empty.";
  }

  // Check whether the option already exists in the poll.
  if (poll.has(option)) {

    // Return a message if the option is already present.
    return `Option "${option}" already exists.`;
  }

  // Add the option to the Map.
  // Create an empty Set to store voters for this option.
  poll.set(option, new Set());

  // Return a confirmation message after adding the option.
  return `Option "${option}" added to the poll.`;
}


// STEP 3: DEFINE THE vote() FUNCTION

// This function accepts an option name and a voter ID.
function vote(option, voterId) {

  // Check whether the requested option exists in the poll.
  if (!poll.has(option)) {

    // Return an error message if the option does not exist.
    return `Option "${option}" does not exist.`;
  }

  // Retrieve the Set of voters associated with this option.
  const voters = poll.get(option);

  // Check whether this voter has already voted for this option.
  if (voters.has(voterId)) {

    // Reject the duplicate vote.
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  // Add the voter ID to the Set.
  // Set automatically stores each ID only once.
  voters.add(voterId);

  // Return a confirmation message for the successful vote.
  return `Voter ${voterId} voted for "${option}".`;
}


// STEP 4: ADD THE INITIAL VOTING OPTIONS

// Add the first voting option.
addOption("Turkey");

// Add the second voting option.
addOption("Morocco");

// Add the third voting option.
addOption("Spain");


// STEP 5: RECORD THE INITIAL VOTES

// Record the first vote for Turkey.
vote("Turkey", "traveler1");

// Record a second vote for Turkey from a different voter.
vote("Turkey", "traveler2");

// Record one vote for Morocco.
vote("Morocco", "traveler3");

// Spain has no votes yet.


// STEP 6: DEFINE THE displayResults() FUNCTION

// This function returns all options and their vote counts.
function displayResults() {

  // Initialize the result string with the required heading.
  let results = "Poll Results:";

  // Loop through each option and its Set of voters.
  for (const [option, voters] of poll) {

    // The Set's size gives the number of unique voters.
    const voteCount = voters.size;

    // Append the option and its vote count on a new line.
    results += `\n${option}: ${voteCount} votes`;
  }

  // Return the complete results string.
  return results;
}


// STEP 7: TEST ADDING A NEW OPTION

// Egypt is not yet in the poll, so it should be added.
console.log(addOption("Egypt"));


// STEP 8: TEST ADDING A DUPLICATE OPTION

// Turkey already exists, so this should return a duplicate message.
console.log(addOption("Turkey"));


// STEP 9: TEST VOTING FOR MALAYSIA

// Add Malaysia before attempting to vote for it.
console.log(addOption("Malaysia"));

// Record traveler1's vote for Malaysia.
console.log(vote("Malaysia", "traveler1"));


// STEP 10: TEST DUPLICATE VOTING FOR ALGERIA

// Add Algeria before voting for it.
console.log(addOption("Algeria"));

// The first vote from traveler1 should succeed.
console.log(vote("Algeria", "traveler1"));

// The second vote from traveler1 should be rejected.
console.log(vote("Algeria", "traveler1"));


// STEP 11: TEST AN OPTION THAT DOES NOT EXIST

// Nigeria has not been added, so this vote should fail.
console.log(vote("Nigeria", "traveler2"));


// STEP 12: TEST MULTIPLE VOTERS FOR THE SAME OPTION

// traveler4 votes for Spain.
console.log(vote("Spain", "traveler4"));

// traveler5 also votes for Spain.
console.log(vote("Spain", "traveler5"));


// STEP 13: DISPLAY THE FINAL POLL RESULTS

// Print the result string returned by displayResults().
console.log(displayResults());
