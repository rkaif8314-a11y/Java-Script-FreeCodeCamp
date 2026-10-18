// Build a Festival Gate Throughput Simulator
// ------------------------------------------------------------
// Purpose:
// Simulate attendee flow through festival gates during two time
// blocks. Each gate can process up to its capacity per tick.
// Any attendees left over are rerouted to the next gate.
//
// Key concepts:
// - Objects and arrays
// - Object-keyed summary totals
// - while loops and for...of loops
// - Circular indexing with the modulo (%) operator
// - Function decomposition
// - Queue mutation and overflow handling
//
// Important behavior to remember:
// Rerouted attendees are added to the NEXT gate's queue at the
// CURRENT tick. Since gates are processed in array order, a gate
// later in the array can process those rerouted attendees during
// the same tick. Overflow from the final gate wraps to the first.
//
// EXPECTED FINAL THROUGHPUT SUMMARIES are documented at the bottom.

// Starting attendee queues for the morning session.
// Each queue value is the number of attendees arriving at that tick.
const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

// Starting attendee queues for the night session.
const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

// Create a throughput total of zero for every gate.
function initializeThroughput(gates) {
  const summary = {};

  for (const gate of gates) {
    summary[gate.id] = 0;
  }

  return summary;
}

// Process one gate for one tick, up to its capacity.
// Return both the number processed and the remaining overflow.
function processGateFlow(gate, tickIndex) {
  let currentTickQueue = gate.queue[tickIndex];
  let processed = 0;

  // Continue processing while people remain and capacity is available.
  while (currentTickQueue > 0 && processed < gate.capacity) {
    currentTickQueue--;
    processed++;
  }

  return {
    processed: processed,
    overflow: currentTickQueue
  };
}

// Send overflow to the next gate. The modulo operator makes the
// final gate wrap around to the first gate.
function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
  const currentIndex = gates.indexOf(currentGate);
  const nextGateIndex = (currentIndex + 1) % gates.length;

  // This updates the next gate's queue for the same tick.
  gates[nextGateIndex].queue[tickIndex] += overflowAmount;

  console.log(
    overflowAmount + " attendees rerouted to " +
    gates[nextGateIndex].id
  );
}

// Process a gate, update its total, and reroute any overflow.
function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
  console.log("\nProcessing " + gate.id + "...");
  console.log(
    gate.queue[tickIndex] + " attendees arriving."
  );

  const result = processGateFlow(gate, tickIndex);
  throughputSummary[gate.id] += result.processed;

  if (result.overflow > 0) {
    console.log(
      "Overflow of " + result.overflow +
      " attendees. Rerouting..."
    );
    rerouteOverflow(gates, gate, tickIndex, result.overflow);
  }
}

// Print the accumulated number of attendees processed by each gate.
function printSummary(summary) {
  console.log("\nThroughput Summary");

  for (const gateId in summary) {
    console.log(
      gateId + ": " + summary[gateId] +
      " attendees processed"
    );
  }
}

// Run the simulation one tick at a time.
// All gates are processed in array order during each tick.
function simulateFestival(gates, timeBlock) {
  console.log("\n" + timeBlock + " Simulation");

  const throughputSummary = initializeThroughput(gates);
  const maxTicks = gates[0].queue.length;
  let tickIndex = 0;

  while (tickIndex < maxTicks) {
    console.log("\nTick " + (tickIndex + 1));

    for (const gate of gates) {
      handleGateAtTick(gates, gate, tickIndex, throughputSummary);
    }

    tickIndex++;
  }

  printSummary(throughputSummary);
}

// Run both sessions.
simulateFestival(morningGates, "Morning");
simulateFestival(nightGates, "Night");

/*
EXPECTED FINAL SUMMARY OUTPUT
-----------------------------

Morning Simulation
Throughput Summary
North: 14 attendees processed
East: 11 attendees processed
South: 11 attendees processed
West: 7 attendees processed

Night Simulation
Throughput Summary
North: 11 attendees processed
East: 8 attendees processed
South: 15 attendees processed
West: 9 attendees processed

Note: Rerouting changes the queues in place. Running simulateFestival
again on the same gate arrays would reuse the mutated queues, so use
fresh copies of the original data for a separate independent run.
*/
