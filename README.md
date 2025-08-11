# Module 4 Coding Assignment Solution

This project is a solution for the Module 4 coding assignment of the Johns Hopkins University Coursera course: **HTML, CSS, and Javascript for Web Developers**.

## Project Description

The goal of this assignment is to create a simple script that loops through an array of names and prints a specific greeting to the browser's developer console. The greeting is conditional:

* If a name starts with the letter **'J'** (either uppercase or lowercase), the program prints **"Good Bye [Name]"**.
* For any other starting letter, it prints **"Hello [Name]"**.

## How to View the Project

1.  Clone this repository or download the files to your local machine.
2.  Open the `index.html` file in any modern web browser (like Chrome, Firefox, or Edge).
3.  Open the browser's **Developer Console** to see the output.
    * **Windows/Linux:** `Ctrl + Shift + I` or `F12`
    * **Mac:** `Cmd + Option + I`

## Core Concepts Demonstrated

This project demonstrates a fundamental understanding of core JavaScript concepts, including:

* **Immediately Invoked Function Expressions (IIFEs)** to create private scopes and avoid polluting the global namespace.
* **JavaScript Objects** and attaching functions as methods to them.
* Exposing objects to the global scope (`window` object) to be used by other scripts.
* Looping over an array using a `for` loop.
* **Conditional Logic** using `if/else` statements.
* Basic string manipulation with `.charAt(0)` and `.toLowerCase()`.

## Expected Output

When you run the project, the following output should appear in the console:

```
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
```
