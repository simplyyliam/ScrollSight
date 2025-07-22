# ScrollSight

<img width="2848" height="1768" alt="ScrollSight" src="https://github.com/user-attachments/assets/a68b1931-6f99-475f-a233-2fa579e49946" />

A minimal and experimental document reader that visualizes scroll progression.

## Why I Made This

I came across a visual concept on Pinterest one day — a smooth-scrolling document interface that highlighted the current section as you read. I thought it looked fun and decided to try building it myself to see how it worked.

I started by mocking up a simple document layout (no real content, just structured sections). Once I was happy with the format, I added a **section tracker** — a floating UI element that displays the name of the section you're currently reading, along with your scroll progress percentage.

After that, I implemented the logic for updating the active section when a user clicks on a section name from the index (which is generated from the `DocumentList` object array). Then came the scroll logic, which mirrors the same behavior — as you scroll through the document, the currently viewed section is set as the active section in state.

Finally, I refined the scroll percentage logic to show how far you've scrolled through the entire page — a small but satisfying visual detail.

This project doesn’t aim to be useful or production-ready — it’s just a fun experiment to explore scroll-based interactions and UI motion.





