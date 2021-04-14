
const task = {
  tasks: [
    {
    text: 'Grocery shopping',
    completed: true
    },
    {
    text: 'Clean Yard',
    completed: false
    },
    {
    text: 'Film course',
    completed: false
    }
  ],
  getTasksToDo() {
    return this.tasks.filter(elem => !elem.completed);
  }
};

console.log(task.getTasksToDo());

