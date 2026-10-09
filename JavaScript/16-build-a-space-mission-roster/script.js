const squad = [];

// Add an astronaut only if their ID is not already present in the crew.
const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

// Linear search: check each existing crew member for a matching ID.
function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }

  crew.push(astronaut);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
];

// Add each remaining astronaut through the duplicate-checking function.
for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}

// Swap two crew positions without changing the original array.
// slice() makes a shallow copy; splice() removes/inserts array elements.
function swapCrewMembers(crew, fromIndex, toIndex) {
  // Validate both indices before attempting the swap.
  if (
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex >= crew.length
  ) {
    console.log("Invalid crew indices");
    return;
  }

  const updatedCrew = crew.slice();
  updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];

  return updatedCrew;
}

const updatedSquad = swapCrewMembers(squad, 2, 5);

// Bubble sort: repeatedly compare adjacent priorities and swap when needed.
// This sorts the crew in place from highest priority to lowest priority.
function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length - 1; i++) {
    for (let j = 0; j < crew.length - 1 - i; j++) {
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

// Filter the crew to include only astronauts eligible for spacewalks (EVA).
// Then sort the eligible astronauts by priority.
function getEVAReadyCrew(crew) {
  const eligible = [];

  for (const astronaut of crew) {
    if (astronaut.isEVAEligible) {
      eligible.push(astronaut);
    }
  }

  sortByPriorityDescending(eligible);

  return eligible;
}

const EVAReadySquad = getEVAReadyCrew(updatedSquad);

// Split a crew list into smaller groups of the requested size.
function chunkCrew(crew, size) {
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }

  const chunks = [];

  // Move forward by one chunk at a time and copy each slice into the result.
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }

  return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);

// Print crew names in descending priority order without sorting the input array.
// slice() copies the array before the bubble sort mutates it.
function printCrewSummary(crew) {
  const sorted = crew.slice();
  sortByPriorityDescending(sorted);

  for (const astronaut of sorted) {
    console.log(astronaut.name);
  }
}

printCrewSummary(updatedSquad);
