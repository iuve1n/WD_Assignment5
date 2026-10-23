# Assignment 5 guide

This guide explains how the pages in this project use JavaScript, the DOM, browser events, and arrays. It follows the assignment from the first script through the to-do list. Use the examples to explain the code in your own words during the defense.

## 1. How a web page uses JavaScript

A web page is made from HTML, CSS, and JavaScript. HTML describes the page elements, CSS controls how they look, and JavaScript responds to actions or changes the page while it is open.

Each task has an HTML file and a JavaScript file. The HTML connects them with a script element such as `<script src="task2.js" defer></script>`. The `src` value names the JavaScript file. `defer` tells the browser to wait until it has read the HTML before running that file, so elements such as `#message` exist when the script looks for them.

The pages share `styles.css` for the dark gray appearance and the navigation bar. Each page has links to Tasks 0 through 8, so you can move between the examples without returning to the first page.

## 2. Variables and values

A variable gives a name to a value so the program can use it later. JavaScript can store different kinds of values, including text (strings), numbers, and true-or-false values (booleans).

In `task1.js`, `studentName` and `studentGroup` are strings, `studentAge` and the two operands are numbers, and `isStudent` is a boolean. The `const` keyword is used for values that are not reassigned. The script prints the values and results with `console.log()`. You can see them in the browser's Developer Tools Console.

The arithmetic operators are `+` for addition, `-` for subtraction, `*` for multiplication, and `/` for division. The final log joins text and variable values into one sentence. Task 0 uses the same console for the student's name and group, then calls `alert("Hello, JavaScript World!")` to show a browser dialog.

## 3. The DOM and selecting elements

The DOM, or Document Object Model, is the browser's representation of the HTML page as elements that JavaScript can find and change. For example, `document.querySelector("#message")` finds the element whose `id` is `message`. The `#` means that the selector is looking for an ID.

In `task2.js`, the script selects a paragraph and a button. `addEventListener("click", ...)` runs the function when the button is clicked. Inside it, `message.textContent` is set to `"Apay zhogary baga koyasizba?)"`, so the paragraph shows the new message.

Task 3 selects a `<div>` and two buttons. One click handler changes `styleBox.style.backgroundColor`; the other changes `styleBox.style.fontSize`. These are direct style changes on that element.

Task 4 shows how JavaScript can create and remove HTML elements. The Add Item handler calls `document.createElement("li")`, sets its text, and adds it to the list with `appendChild()`. A counter gives each new list item a different number. The Remove Item handler checks `lastElementChild` and removes that element when one exists. The check prevents an error when the list is already empty.

## 4. Browser events

An event is something that happens in the browser, such as a click, a mouse movement, or a keyboard action. `addEventListener()` connects an event to the code that should run in response.

In `task5.js`, `mouseover` changes the box's background color and `mouseout` restores its original color. In `task6.js`, the `keyup` event runs after a key is released. The handler copies the current input value into the output span. When the input is empty, it displays "Nothing typed yet." instead.

These examples update the page without reloading it. The browser reports the interaction, JavaScript handles it, and the DOM shows the result.

## 5. Calculator and decisions

Task 7 has two number inputs and four operation buttons. Each button calls `calculate()` with an operator symbol. The function first checks whether either input is blank. It then converts the input strings to numbers with `Number()` and uses `if` and `else if` statements to choose the requested arithmetic operation.

Division needs one extra check: if the second number is zero, the function displays "Cannot divide by zero." and returns before calculating. Otherwise the answer is written into the result paragraph. The result paragraph has `aria-live="polite"`, which lets assistive technology know that its text can update while the user interacts with the page.

## 6. Arrays and the to-do list

An array holds an ordered list of values. Task 8 uses the `tasks` array to keep task objects while the page is open. Each object has a `text` value and a `completed` boolean. The assignment asks for temporary storage, so this example does not use a database or browser storage. Reloading the page clears the array.

When the form is submitted, the handler prevents the browser's default form submission, trims whitespace from the input, and ignores an empty value. It adds a new task object to the array, clears the input, and calls `renderTasks()`.

`renderTasks()` clears the visible list and rebuilds it from the array. For each task it creates a list item, a checkbox, its text, and a Delete button. Checking the box updates the object's `completed` value. Completed task text receives the `completed-task` CSS class, which adds a line through the text. The Delete button removes that task from the array, and the list is rendered again.

Keeping the array as the source of the task data makes each action straightforward: update or remove an item in the array, then draw the list again from the current data.

## 7. Where to look and how to run the project

- `index.html` and `task0.js`: first script, name and group in the console, and the alert.
- `task1.html` and `task1.js`: variables, arithmetic, and string concatenation.
- `task2.html` and `task2.js`: changing paragraph text after a click.
- `task3.html` and `task3.js`: changing a box's color and font size.
- `task4.html` and `task4.js`: adding and removing list elements.
- `task5.html` and `task5.js`: mouse events.
- `task6.html` and `task6.js`: keyboard input updates.
- `task7.html` and `task7.js`: calculator operations.
- `task8.html` and `task8.js`: the to-do list.
- `styles.css`: shared page layout, dark colors, navigation, and task-specific styling.

To run the project, open `index.html` in a browser and use the navigation links. Open Developer Tools and select Console to see the output for Tasks 0 and 1. The project is also published with GitHub Pages at [iuve1n.github.io/WD_Assignment5](https://iuve1n.github.io/WD_Assignment5/).

## 8. Defense questions to practice

1. What does `querySelector()` return, and how does the `#` selector work?
2. What is the difference between `textContent` and `style.backgroundColor` in these tasks?
3. What does `addEventListener()` do? Name one event used in the project.
4. Why does Task 4 check whether `lastElementChild` exists before removing it?
5. Why does the calculator convert input values with `Number()`?
6. How does Task 8 know whether a task is completed?
7. What happens to the tasks if you reload the page, and why?

A useful live-coding practice is to add a button to one page, select it in JavaScript, and attach a click handler that changes an existing element's text or style. Try to explain each step while you type.
