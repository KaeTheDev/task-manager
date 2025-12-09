#  React Lab – Lists, Keys, and Conditionals (Task Manager App)

##  Overview
This lab guided me through building a small Task Management application in React and TypeScript.

I worked with dynamic list rendering, proper use of keys, component composition, and conditional UI logic.

By the end, I had a reusable, type-safe set of components that render tasks, filter them by status, and display different visual states based on task data.

##  Workplace Context

Imagine you are a frontend engineer working on a real-world task management dashboard.
Your team needs a flexible component system that can:

* Display a list of tasks
* Filter them by status (e.g., all, completed, pending)
* Show different visual states based on urgency, completion, or category
* Maintain strict type safety
* Support efficient key & list rendering patterns

This lab simulates that environment, helping you practice the React patterns used in production systems.

##  Learning Objectives

By completing this lab, you will be able to:

* Render dynamic lists using proper React key management
* Filter and sort items inside a component
* Use conditional rendering to visually distinguish task states
* Apply TypeScript interfaces to define predictable component props
* Structure React apps using reusable components and clear composition patterns

##  Description

This lab focuses on:

* Rendering lists of tasks using .map()
* Choosing correct and stable keys to prevent React reconciliation issues
* Using conditional rendering (?:, &&, fragments) to show different UI states
* Building reusable components (TaskList, TaskItem, TaskFilter)
* Passing data and callbacks through props with TypeScript interfaces
* Organizing code in a scalable folder structure

##  Resources

*  React Docs — https://react.dev
*  TypeScript Handbook — https://www.typescriptlang.org/docs
*  React Hooks Guide — Official Documentation
*  TypeScript + React Cheatsheets (recommended)

##  Getting Started

Follow the setup steps below to create the Task Manager project using Vite + TypeScript.

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
*  TypeScript
*  React

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone https://github.com/KaeTheDev/task-manager.git

2. Navigate into the project folder:

cd task-manager

##  Setup

1. Install dependencies:

npm install

2. Run the project:

npm run dev

##  Project Structure

src/
  components/
    TaskList/
      TaskList.tsx
    TaskItem/
      TaskItem.tsx
    TaskFilter/
      TaskFilter.tsx
  types/
    index.ts

## Folder/Component Breakdown

* components/ — All reusable TypeScript React components
* TaskList/ — Renders the full list of tasks
* TaskItem/ — Displays individual task data and conditional UI
* TaskFilter/ — Allows sorting/filtering tasks by status
*#  React Lab – Lists, Keys, and Conditionals (Task Manager App)

##  Overview

This lab guided me through building a small Task Management application in React and TypeScript.

I worked with dynamic list rendering, proper use of keys, component composition, and conditional UI logic.

By the end, I had a reusable, type-safe set of components that render tasks, filter them by status, and display different visual states based on task data.

##  Workplace Context

Imagine you are a frontend engineer working on a real-world task management dashboard.

Your team needs a flexible component system that can:

*  Display a list of tasks
*  Filter them by status (e.g., all, completed, pending)
*  Show different visual states based on urgency, completion, or category
*  Maintain strict type safety
*  Support efficient key & list rendering patterns

This lab simulates that environment, helping you practice the React patterns used in production systems.

##  Learning Objectives

By completing this lab, you will be able to:

*  Render dynamic lists using proper React key management
*  Filter and sort items inside a component
*  Use conditional rendering to visually distinguish task states
*  Apply TypeScript interfaces to define predictable component props
*  Structure React apps using reusable components and clear composition patterns

##  Description

This lab focuses on:

*  Rendering lists of tasks using .map()
*  Choosing correct and stable keys to prevent React reconciliation issues
*  Using conditional rendering (?:, &&, fragments) to show different UI states
*  Building reusable components (TaskList, TaskItem, TaskFilter)
*  Passing data and callbacks through props with TypeScript interfaces
*  Organizing code in a scalable folder structure

##  Resources

*  React Docs — https://react.dev
*  TypeScript Handbook — https://www.typescriptlang.org/docs
*  React Hooks Guide — Official Documentation
*  TypeScript + React Cheatsheets (recommended)

##  Getting Started

Follow the setup steps below to create the Task Manager project using Vite + TypeScript.

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
*  TypeScript
*  React

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:
git clone [<repository-url>](https://github.com/KaeTheDev/task-manager.git)

2. Navigate into the project folder:
cd task-manager

##  Setup

1. Install dependencies:
npm install

2. Run the project:
npm run dev

##  Project Structure
src/

components/

TaskList/

TaskList.tsx

TaskItem/

TaskItem.tsx

TaskFilter/

TaskFilter.tsx

types/

index.ts

##  Folder/Component Breakdown

*  components/ — All reusable TypeScript React components
*  TaskList/ — Renders the full list of tasks
*  TaskItem/ — Displays individual task data and conditional UI
*  TaskFilter/ — Allows sorting/filtering tasks by status
*  types/ — Holds shared TypeScript interfaces (e.g., Task, props types)types/ — Holds shared TypeScript interfaces (e.g., Task, props types)