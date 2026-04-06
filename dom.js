// select the h1 element
const heading = document.getElementsByTagName("h1");
console.log(heading);

// select all elements with the class content
const content = document.getElementsByClassName("content");
console.log(content);

// select form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log(contactForm);

// select the email input
const emailInput = document.querySelector('input[name="email"]');
console.log(emailInput);

// select all list items in the nav
const listItems = document.querySelectorAll("nav ul li");
console.log(listItems);

// select the first nav link
const firstNavLink = document.querySelector(".nav-link");
console.log(firstNavLink);

// select last paragraph
const lastParagraph = document.querySelector("p:last-child");
console.log(lastParagraph);


// DOM Navigation
const header = document.getElementById("main-header");
console.log(header.querySelector('nav')); // navigating to the nav 


const firstNavLink2 = document.querySelector(".nav-link");
console.log(firstNavLink2.parentElement); // navigating to the parent li in first nav link

const article1 = document.querySelector("article");
console.log(article1.nextElementSibling); // navigating to the next sibling which is the section

const unorderedList = document.querySelector("ul");
console.log(unorderedList.children); // all its child elements which are the list items

const footer1 = document.querySelector("footer");
console.log(footer1.parentElement); // starting from footer and navigating up to the body

// Modifying text Content
const h1 = document.querySelector("h1");

// Reading text
console.log(h1.textContent);     // Includes hidden text
console.log(h1.innerText);       // Only visible text

h1.textContent = "New Title";

// Modifying HTML Content
const article2 = document.querySelector("article");

// Reading HTML
console.log(article2.innerHTML);

// Modifying HTML (careful with security!)
article2.innerHTML = `<h2>Updated Article</h2>
    <p>This is new content.</p>`;
   

// Safer: textContent (escapes HTML)
const userInput = "<script>alert('hack!')</script>";
article2.textContent = userInput;  // Displays as text, not executed

// Modifying Attributes
const link = document.querySelector(".nav-link");

// Get attribute
console.log(link.getAttribute("href"));
console.log(link.href);  // Property access

// Set attribute
link.setAttribute("href", "https://example.com");
link.href = "https://example.com";  // Same result

// Check attribute
console.log(link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes
// <element data-id="123" data-category="tech">
const element = document.querySelector("[data-id]");
console.log(element.dataset.id);        // "123"
console.log(element.dataset.category);  // "tech"
element.dataset.newAttr = "value";      // Creates data-new-attr

// Modifying Styles
const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles (use classes instead when possible!)
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

// Creating Elements
// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
const article = document.querySelector("article");
article.appendChild(newParagraph);  // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);  // Add before first p

// Modern insertion methods
//article.prepend(newParagraph);         // First child
//article.append(newParagraph);          // Last child
//firstParagraph.before(newParagraph);   // Before sibling
firstParagraph.after(newParagraph);    // After sibling

//Removing Elements
// Remove an element
//const footer = document.querySelector("footer");
//footer.remove();

//Cloning Elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

// Function that adds a new nav element dynamically
function addNavItem(text, href) {
    // Create li with a.nav-link inside
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "nav-link";
    a.textContent = text;
    // Add to the nav list
    a.href = href;
    li.appendChild(a);
    document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");



// Building a click counter
const countDisplay = document.getElementById("count-display");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");

// Keep track of the count
let count = 0;

//+ button to increase the count
increaseBtn.addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
});

//- button to decrease the count (but not below 0)
decreaseBtn.addEventListener("click", function() {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
});

// Reset button takes count back to 0
resetBtn.addEventListener("click", function() {
    count = 0;
    countDisplay.textContent = count;
});

// Listen for any keydown event on the whole document
document.addEventListener("keydown", function(e) {

    // Ctrl+S — show "Saved!" and prevent browser's save dialog
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault(); // stops the browser save dialog from opening
        alert("Saved!");
    }

    // Escape — clear all form inputs
    if (e.key === "Escape") {
        const inputs = document.querySelectorAll("#contact-form input");
        inputs.forEach(function(input) {
            input.value = "";
        });
    }

    // Ctrl+Enter — submit the form
    if (e.ctrlKey && e.key === "Enter") {
        const form = document.getElementById("contact-form");
        form.submit();
    }

});
