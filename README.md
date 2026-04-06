# Week 5: DOM Manipulation & Events

## Author
- **Name:** Connie
- **GitHub:** [@Connie-cloud-svg](https://github.com/Connie-cloud-svg)
- **Date:** March 30, 2026.

## Project Description
This week focused on making web pages interactive using the Document Object Model (DOM). I learned how to select, traverse, and modify HTML elements using JavaScript, and how to respond to user actions through event listeners. The main deliverable is a fully functional **Interactive To-Do List** application built from scratch — no frameworks, just vanilla JavaScript and DOM manipulation.

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- DOM Web API

## Features

### Core To-Do List
- Add tasks by pressing Enter or clicking the Add button
- Empty task submissions are blocked
- Toggle tasks between active and completed (strikethrough styling)
- Delete individual tasks with a hover-revealed delete button
- Filter tasks by: **All**, **Active**, or **Completed**
- Live counter showing how many items are left
- "Clear Completed" button to bulk-remove finished tasks
- **Bonus:** Double-click any task to edit it inline; press Enter to save or Escape to cancel

### Lessons & Exercises
- DOM selection using `getElementById`, `querySelector`, `querySelectorAll`, `getElementsByClassName`, and `getElementsByTagName`
- DOM traversal via `parentElement`, `children`, `nextElementSibling`, and `previousElementSibling`
- Dynamic content modification using `textContent`, `innerHTML`, `setAttribute`, and `dataset`
- Creating, inserting, cloning, and removing elements
- Event listeners for click, keyboard, form submit, input, focus, and blur events
- Event object usage (`event.target`, `event.preventDefault()`, `event.stopPropagation()`)
- Event bubbling and event delegation using a single parent listener
- Real-time form validation with regex for email and length checks for name

### Daily Challenges
- **Day 1:** Random color changer for all heading elements
- **Day 2:** Dynamic paragraph creator with numbered entries and delete buttons
- **Day 3:** Image remover / hide-show toggle
- **Day 4:** Content copier between two divs
- **Day 5:** Dark mode toggle with body class switching

## How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/Connie-cloud-svg/iyf-s10-week-05-Connie-cloud-svg.git
   ```
2. Open the project folder
3. Open `index.html` in your browser — no installs needed!

## Lessons Learned
- The difference between `textContent` (safe, treats input as plain text) and `innerHTML` (powerful but vulnerable to XSS if used with user input)
- Why event delegation is far more efficient than adding individual listeners to each element — especially when items are added dynamically
- How event bubbling works: a click on a child element travels up through the DOM tree, triggering listeners on every ancestor
- The difference between `event.target` (the element that was actually clicked) and `event.currentTarget` (the element the listener is attached to)
- How to use `closest()` and `dataset` to identify which task triggered a click inside a delegated listener
- The importance of `event.preventDefault()` on form submissions to stop page reloads
- How `querySelectorAll` returns a static NodeList while `getElementsByClassName` returns a live HTMLCollection

## Challenges Faced

**1. Event delegation with multiple button types in the To-Do List**  
Each task item had both a toggle (click on task text) and a delete button. Getting the delegated listener on the parent `<ul>` to correctly distinguish between these two actions was tricky. I solved it by using `event.target.closest()` combined with `dataset` attributes to identify which action was triggered and which task ID it belonged to.

**2. Keeping the UI in sync with state**  
I initially tried updating the DOM directly for every action, which led to inconsistencies. I refactored to a state-first approach: all changes update the `todos` array first, then `renderTodos()` re-draws the list from scratch. This made filtering and stats updates much simpler and more reliable.

**3. Inline task editing (Bonus feature)**  
Switching a task between display mode and edit mode required replacing the `<span>` with an `<input>` on double-click, focusing it, and then handling both Enter (save) and Escape (cancel) without interfering with the main list listener. Managing these two keyboard events cleanly inside a delegated listener took careful use of `event.key` checks.

## Screenshots 
[To-Do List App](https://github.com/Connie-cloud-svg/iyf-s10-week-05-Connie-cloud-svg/blob/main/projects/to-do%20list.JPG)

## Live Demo 
[View Live Demo](https://connie-cloud-svg.github.io/iyf-s10-week-05-Connie-cloud-svg)
