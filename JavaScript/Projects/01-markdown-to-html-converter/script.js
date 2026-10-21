/*
  STEP 1: SELECT HTML ELEMENTS
*/

// Get the textarea where the user types Markdown.
const markdownInput = document.getElementById("markdown-input");

// Get the element that displays the converted HTML as text.
const htmlOutput = document.getElementById("html-output");

// Get the element that displays the rendered HTML preview.
const preview = document.getElementById("preview");


/*
  STEP 2: CREATE THE CONVERSION FUNCTION
*/

// This function converts Markdown text into HTML.
// It reads the textarea's value and returns the converted string.
function convertMarkdown() {
    let markdown = markdownInput.value;


    /*
      STEP 3: CONVERT HEADINGS
    */

    // Convert level-three headings first (### Heading).
    markdown = markdown.replace(/^### (.+)$/gm, "<h3>$1</h3>");

    // Convert level-two headings (## Heading).
    markdown = markdown.replace(/^## (.+)$/gm, "<h2>$1</h2>");

    // Convert level-one headings (# Heading).
    markdown = markdown.replace(/^# (.+)$/gm, "<h1>$1</h1>");


    /*
      STEP 4: CONVERT IMAGES
    */

    // Convert ![alt text](image-url) into an HTML image.
    // Images are processed before links because their syntax contains brackets.
    markdown = markdown.replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        '<img alt="$1" src="$2">'
    );


    /*
      STEP 5: CONVERT LINKS
    */

    // Convert [link text](URL) into an HTML anchor element.
    markdown = markdown.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2">$1</a>'
    );


    /*
      STEP 6: CONVERT BOLD TEXT
    */

    // Convert **bold text** into <strong>bold text</strong>.
    markdown = markdown.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // Convert __bold text__ into <strong>bold text</strong>.
    markdown = markdown.replace(/__(.+?)__/g, "<strong>$1</strong>");


    /*
      STEP 7: CONVERT ITALIC TEXT
    */

    // Convert *italic text* into <em>italic text</em>.
    markdown = markdown.replace(/\*(.+?)\*/g, "<em>$1</em>");

    // Convert _italic text_ into <em>italic text</em>.
    markdown = markdown.replace(/_(.+?)_/g, "<em>$1</em>");


    /*
      STEP 8: CONVERT BLOCKQUOTES
    */

    // Convert > quoted text into a <blockquote> element.
    markdown = markdown.replace(
        /^> (.+)$/gm,
        "<blockquote>$1</blockquote>"
    );


    /*
      STEP 9: RETURN THE RESULT
    */

    // Return the converted HTML string to the calling code.
    return markdown;
}


/*
  STEP 10: UPDATE OUTPUT WHEN USER TYPES
*/

// Listen for typing or other input changes in the textarea.
markdownInput.addEventListener("input", () => {

    // Run the conversion function and store its returned HTML.
    const html = convertMarkdown();

    // Show the HTML tags as readable text in the raw output panel.
    htmlOutput.textContent = html;

    // Render the HTML so the user can see the formatted result.
    preview.innerHTML = html;
});
