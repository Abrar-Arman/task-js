//global var
let tasks = [];
let cnt = 0;
//task menue
function taskMenue() {
  const taskMenue = [
    "Add Tasks",
    "View Tasks",
    "Toggle Task Complation",
    "Edit Task",
    "Delete Task",
    "Find Task",
    "Exit"
  ];
  console.log("Task Manager Menue :");
  for (let i = 0; i < taskMenue.length; i++) {
    console.log(i + 1 + "." +  taskMenue[i]);
  }
}
taskMenue();
if(localStorage.getItem('tasks')){
    tasks=JSON.parse(localStorage.getItem('tasks'));
    cnt=tasks[tasks.length-1].id;
}
// tasks
function addTask() {
    const taskDescription = prompt("Enter task description");
    if (taskDescription != "") {
        cnt++;
      tasks.push({ id: cnt, taskDescription, completed: false });
      localStorage.setItem('tasks',JSON.stringify(tasks));
      console.log(`Task added successfully ${taskDescription} `);
      
    }
  
  }
  function viewTasks() {
    if (tasks.length === 0) {
      console.log("No tasks found");
     return;
    }
    console.log("Tasks:");
    tasks.forEach((task) => {
      console.log(`${task.id}. ${task.taskDescription} - ${task.completed? "Completed" : "Not Completed"}`);
    });
   
  }
  function toggleTaskCompletion(){
    const id= prompt('please select task ')
    if(parseInt(id)>cnt){
        console.log('task not found');
        return;
    }
    
        const index=tasks.findIndex(task=>task.id==id);
        tasks[index].completed=tasks[index].completed?false:true;
     console.log(`${tasks[index].taskDescription} - ${tasks[index].completed}`)
    
  }
  function editTask() {
    const id=prompt('please select task to edit')
    if(parseInt(id)>cnt){
        console.log('task not found');
        return;
    }
    const description=prompt('please enter task description')
    const index=  tasks.findIndex(task=>task.id==id)
    tasks[index].taskDescription=description
    console.log(` ${tasks[index].taskDescription} updated successfully `)
   

  }
  function  deleteTask(){
    const id=prompt('please select task to delete')
    if(parseInt(id)>cnt){
        console.log('task not found');
        return;
    }
    const index= tasks.findIndex(task=>task.id==id)
    tasks.splice(index,1);
    console.log(`Task deleted successfully ${tasks.taskDescription}`)
  }
  function findTask() {
    const search=prompt('search to task');
    const task=tasks.filter(task=>task.taskDescription.toUpperCase().includes(search.toUpperCase()))
    task.forEach(task=>{
        console.log(`${task.id}. ${task.taskDescription} - ${task.completed? "Completed" : "Not Completed"}`);
    })
  }
  //tasks end
function selectTask() {
  while (true) {
    const taskJob = prompt("Enter your Choise (1-6)");
    
    switch (taskJob) {
      case "1":
        addTask();
        break;
      case "2":
        viewTasks();
        break;
      case "3":
        toggleTaskCompletion();
        break;
      case "4":
        editTask();
        break;
      case "5":
        deleteTask();
        break;
      case "6":
        findTask();
        break;
        case "7":
            console.log("Exiting...");
            return;
      default:
        console.log("Invalid Choice");
    }
  }
}
 selectTask();


