// Function to count the number of vowels in a sentence.
function getVowelCount(sentence) {
  // Store all vowels for easy checking.
  const vowels = "aeiou";
  let count = 0;

  // Convert the sentence to lowercase and check each character.
  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

// Function to count the number of consonants in a sentence.
function getConsonantCount(sentence) {
  // Store all consonants for easy checking.
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  // Convert the sentence to lowercase and check each character.
  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }

  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

// Function to count punctuation characters in a sentence.
function getPunctuationCount(sentence) {
  // Store the punctuation characters that should be counted.
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  // Check each character against the punctuation list.
  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }

  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

// Function to count the words in a sentence.
function getWordCount(sentence) {
  // Return 0 when the sentence contains only spaces or is empty.
  if (sentence.trim() === "") {
    return 0;
  }

  // Remove leading/trailing spaces and split the sentence into words.
  const words = sentence.trim().split(" ");
  let count = 0;

  // Count only non-empty elements.
  for (const word of words) {
    if (word !== "") {
      count++;
    }
  }

  return count;
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
