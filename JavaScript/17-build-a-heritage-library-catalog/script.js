const rawCatalogCards = [
  "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
  "The Shining | King, Stephen | 1977 | Shelf K1",
  "The Stand | King, Stephen | 1978 | Shelf K2",
  "It | King, Stephen | 1986 | Shelf K3",
  "Misery | King, Stephen | 1987 | Shelf K4",
  "Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5",
  "I, Robot | Asimov, Isaac | 1950 | Shelf A8",
  "Foundation | Asimov, Isaac | 1951 | Shelf A9",
  "Dune | Herbert, Frank | 1965 | Shelf H3",
  "Neuromancer | Gibson, William | 1984 | Shelf G8",
  "Snow Crash | Stephenson, Neal | 1992 | Shelf S6",
  "The Martian | Weir, Andy | 2011 | Shelf W5",
  "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
  "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
  "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
  "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",
  // Edge cases: missing data
  "Unknown Title |  | 1975 | Shelf X1",
  "Mysterious Manuscript | Unknown Author |  | Shelf Z9",
  "Ancient Scroll | Anonymous | 850 | ",
];

// Split a raw catalog card into fields and replace missing values with defaults.
function parseCard(rawString) {
  const parts = rawString.split("|");
  const trimmedParts = [];

  // Remove extra spaces around each field.
  for (let i = 0; i < parts.length; i++) {
    trimmedParts.push(parts[i].trim());
  }

  const title = trimmedParts[0];
  const author = trimmedParts[1];
  const year = trimmedParts[2];
  const location = trimmedParts[3];

  return {
    title: title || "Unknown",
    author: author || "Unknown",
    year: year ? parseInt(year) : "Unknown",
    location: location || "Unknown"
  };
}

// Convert every raw card into a structured catalog entry.
function parseCatalog(rawCards) {
  const catalog = [];

  for (let i = 0; i < rawCards.length; i++) {
    catalog.push(parseCard(rawCards[i]));
  }

  return catalog;
}

const catalog = parseCatalog(rawCatalogCards);

// Find books whose author field contains the search term (case-insensitive).
function findByAuthor(catalog, author) {
  const searchTerm = author.toLowerCase();
  const results = [];

  for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].author.toLowerCase().includes(searchTerm)) {
      results.push(catalog[i]);
    }
  }

  return results;
}

// Group catalog entries by decade; keep missing years in an "Unknown" group.
function groupByDecade(catalog) {
  const grouped = {};

  for (let i = 0; i < catalog.length; i++) {
    const book = catalog[i];

    if (book.year === "Unknown") {
      if (!grouped["Unknown"]) {
        grouped["Unknown"] = [];
      }
      grouped["Unknown"].push(book);
      continue;
    }

    // Example: 1986 becomes the "1980s" group.
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;

    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }

    grouped[decadeKey].push(book);
  }

  return grouped;
}

const byDecade = groupByDecade(catalog);

// Format one catalog entry as a readable text block.
function renderEntry(entry) {
  const title = entry.title || "Unknown";
  const author = entry.author || "Unknown";
  const year = entry.year || "Unknown";
  const location = entry.location || "Unknown";

  return `${"-".repeat(25)}
Title: ${title}
Author: ${author}
Year: ${year}
Location: ${location}
${"-".repeat(25)}`;
}

console.log(renderEntry(catalog[0]));

// Check that an entry contains all required fields with meaningful values.
function validateEntry(entry) {
  let isValid = true;

  if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
    isValid = false;
  }
  if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
    isValid = false;
  }
  if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
    isValid = false;
  }
  if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
    isValid = false;
  }

  return isValid;
}

// Export the complete catalog as a formatted JSON string.
function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
}

// Export the catalog as CSV, escaping each text field with quotes.
function exportToCSV(catalog) {
  const header = "Title,Author,Year,Location";
  const rows = [];

  for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];
    rows.push(`"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`);
  }

  let csv = header;

  for (let i = 0; i < rows.length; i++) {
    csv = csv + "\n" + rows[i];
  }

  return csv;
}

console.log(exportToCSV(catalog));

// Display the total number of books and the number of decade groups.
console.log(catalog.length);
console.log(Object.keys(byDecade).length);

// Find the earliest and latest known publication years.
let oldestYear = Infinity;
let newestYear = 0;

for (let i = 0; i < catalog.length; i++) {
  const entry = catalog[i];

  if (entry.year !== "Unknown") {
    if (entry.year < oldestYear) {
      oldestYear = entry.year;
    }
    if (entry.year > newestYear) {
      newestYear = entry.year;
    }
  }
}

console.log(oldestYear);
console.log(newestYear);
