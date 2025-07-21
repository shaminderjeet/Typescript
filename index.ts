import fs from 'fs';
const TASKS='tasks.json';
interface Task{
  id: number;
  title: string;
  completed: boolean;
}
function loadTasks(): Task[] {
  if (!fs.existsSync(TASKS)) {
    return [];
  }
  const data = fs.readFileSync(TASKS, 'utf-8');
  return JSON.parse(data);
}
console.log(loadTasks());
function saveTasks(tasks: Task[]) {
    fs.writeFileSync(TASKS, JSON.stringify(tasks, null, 2));
}
function listTasks(){
    const tasks=loadTasks();
    console.log("Your Tasks")

tasks.forEach(task=>{
      console.log(`${task.completed ? '[✔]' : '[ ]'} ${task.id} - ${task.title}`);
  });
}
listTasks();
function addTask(title: string) {
  const tasks = loadTasks(); // load current tasks
  const newTask: Task = {
    id: Date.now(),   // use current time as unique ID
    title,            // task title from argument
    completed: true, // new tasks start as not completed
  };
  tasks.push(newTask); // add new task to array
  saveTasks(tasks);    // save updated tasks back to file
  console.log(`Added task: "${title}"`);
}
addTask("shopping")
