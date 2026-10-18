# Build a Festival Gate Throughput Simulator

This JavaScript exercise simulates attendee flow through festival entry gates for morning and night sessions. Each gate has a processing capacity, and attendees who cannot be processed are rerouted to the next gate.

## Concepts Practiced

- Arrays and objects
- Functions and helper functions
- `for...of`, `for...in`, and `while` loops
- Circular indexing with the modulo operator (`%`)
- Queue processing and overflow handling
- Updating object properties and arrays
- Tracking totals in an object
- Reading expected output and understanding execution order

## Important Behavior

Overflow is added to the next gate's queue for the same tick. Because gates are handled in array order, a later gate can process rerouted attendees during that tick. Overflow from the last gate wraps around to the first gate. The simulation also mutates the input queues.

## File

- `script.js`
