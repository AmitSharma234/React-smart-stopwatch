import { useState } from "react";

function TodoList() {
  const [task, setTasks] = useState(["Eat Breakfast", "Running", "Working"]);
  const [newTask, setNewTask] = useState("");

  // Input handler
  function InputChange(event) {
    setNewTask(event.target.value);
  }

  // Add task
  function AddTask() {
    if (newTask.trim() !== "") {
      setTasks(prev => [...prev, newTask]); // push new task
      setNewTask(""); // clear input
    }
  }

  // Delete task
  function DeleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  // Move task up
  function MoveTaskUp(index) {
    if (index > 0) {                                // FIX: index must be > 0
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] =
      [updatedTask[index - 1], updatedTask[index]];
      setTasks(updatedTask);
    }
  }

  // Move task down
  function MoveTaskDown(index) {
    if (index < task.length - 1) {                  // FIX: correct swap indexes
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] =
      [updatedTask[index + 1], updatedTask[index]];
      setTasks(updatedTask);
    }
  }

  return (
    <div style={{
      maxWidth:"500px",
      margin:"40px auto",
      textAlign:"center",
      fontFamily:"Arial, sans-serif",
      padding:"20px",
      border:"1px solid #e5e5e5",
      borderRadius:"10px",
      boxShadow:"0 4px 12px rgba(0,0,0,0.08)"
    }}>

      <h1 style={{fontSize:"28px",color:"#333",marginBottom:"20px"}}>To-Do-List</h1>

      <div style={{display:"flex",gap:"10px",justifyContent:"center",marginBottom:"20px"}}>
        <input
          type="text"
          placeholder="Enter The Task"
          value={newTask}
          onChange={InputChange}
          style={{
            flex:"1",
            padding:"10px",
            border:"1px solid #ccc",
            borderRadius:"6px",
            fontSize:"15px"
          }}
        />
        <button
          onClick={AddTask}
          style={{
            background:"#0A66C2",
            color:"#fff",
            border:"none",
            padding:"10px 16px",
            borderRadius:"6px",
            cursor:"pointer",
            fontWeight:"600"
          }}
        >Add Task</button>
      </div>

      <ol style={{textAlign:"left",paddingLeft:"20px"}}>
        {task.map((task, index) => (
          <li key={index} style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:"10px",
            padding:"10px",
            border:"1px solid #ddd",
            borderRadius:"6px",
            background:"#fafafa"
          }}>
            <span style={{fontSize:"16px",color:"#222",flex:"1"}}>{task}</span>

            <button
              onClick={() => DeleteTask(index)}
              style={{background:"#D72638",color:"#fff",border:"none",padding:"6px 10px",marginLeft:"5px",borderRadius:"4px",cursor:"pointer"}}>
              Delete
            </button>

            <button
              onClick={() => MoveTaskUp(index)}
              style={{background:"#008000",color:"#fff",border:"none",padding:"6px 10px",marginLeft:"5px",borderRadius:"4px",cursor:"pointer"}}>
              Up
            </button>git add .
git commit -m "TaskTrackr initial working version"
git push -u origin main


            <button
              onClick={() => MoveTaskDown(index)}
              style={{background:"#F4A100",color:"#fff",border:"none",padding:"6px 10px",marginLeft:"5px",borderRadius:"4px",cursor:"pointer"}}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
