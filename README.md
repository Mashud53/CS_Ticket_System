# React Basic Concepts

## 1. What is JSX, and why is it used?

**Ans:**  
JSX means **JavaScript XML**. It is a syntax extension for React that allows developers to write **HTML-like code inside JavaScript**. It makes UI code easier to read and write.

---

## 2. What is the difference between State and Props?

**Ans:**  
In React, **State** and **Props** are used to manage and pass data in components, but they work differently.

### State
- State is data managed **inside a component**.
- State **can be changed** by the component.
- Used to manage **dynamic data** that changes over time.

### Props
- Props are data **passed from a parent component to a child component**.
- Props **cannot be changed by the child component**.
- Used to **pass data between components**.

---

## 3. What is the useState hook, and how does it work?

**Ans:**  
useState is a React hook used to add and manage state in functional components. It returns a state variable and a function to update that state, and when the state changes, React re-renders the component to update the UI.

---

## 4. How can you share state between components in React?

**Ans:**  

1. State lives in the **parent component**  
2. Parent sends data to the **child component using props**  
3. Child updates the state using a **function passed from the parent**

This method is called **"Lifting State Up."**

---

## 5. How is event handling done in React?

**Ans:**  
Event handling in React is similar to HTML events, but it uses:

- **camelCase syntax** (e.g., `onClick`, `onChange`)
- **JavaScript functions** instead of strings

