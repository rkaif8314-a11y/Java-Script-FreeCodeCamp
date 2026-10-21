# FreeCodeCamp JavaScript Project 1: Markdown to HTML Converter

This project converts a subset of Markdown syntax into HTML and updates both a raw HTML output panel and a rendered preview as the user types.

## Features

- Converts level-one, level-two, and level-three headings.
- Converts Markdown images and links.
- Converts bold and italic text using asterisks or underscores.
- Converts blockquotes.
- Updates the HTML output and preview on every input event.

## Files

- `script.js` — the project JavaScript, kept as provided with its original logic and comments.

## Required HTML elements

The HTML page should include elements with these IDs:

- `markdown-input` — textarea for Markdown input.
- `html-output` — element that displays the generated HTML as text.
- `preview` — element that renders the generated HTML.

## How it works

The `convertMarkdown()` function applies regular-expression replacements to the Markdown text and returns the converted HTML string. An `input` event listener then updates the raw HTML output and rendered preview.

## Note

This is a learning project with a simple, regex-based Markdown converter, not a complete Markdown parser. The preview uses `innerHTML`, so it should only be used with trusted input; do not use it as-is for untrusted user content in a public application.
