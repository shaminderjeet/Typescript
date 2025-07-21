Task Manager CLI
A simple task management command-line tool written in TypeScript that stores tasks in a JSON file (tasks.json).

Features
Load tasks from a JSON file

Save tasks back to the file

List all tasks with status icons

Add new tasks with unique IDs and default completion status

How It Works
Load Tasks
The program checks if the tasks.json file exists. If yes, it loads and parses the tasks from it; otherwise, it starts with an empty task list.

List Tasks
It displays all tasks, showing if each is completed ([✔]) or not ([ ]), along with their IDs and titles.

Add Task
Adds a new task with a unique ID (current timestamp), the given title, and marks it as completed by default (you might want to set completed: false instead).

Save Tasks
Saves the updated task list back into tasks.json
Start
  |
  V
Check if "tasks.json" exists? --No--> Initialize empty tasks array
  | Yes
  V
Load and parse tasks from "tasks.json"
  |
  V
[Function: listTasks]
  |--------------------------|
  |                          V
Print task list          (optional addTask call)
                           |
                           V
                   Create new Task object
                           |
                           V
                   Add new Task to tasks array
                           |
                           V
               Save tasks array to "tasks.json"
                           |
                           V
                         End
