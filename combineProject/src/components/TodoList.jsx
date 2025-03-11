import { useState, useEffect } from "react";

const TodoList = ({ theme }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const isLightTheme = theme === "light";

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { task: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isLightTheme ? "rgb(214 225 247)" : "rgb(30 30 30)",
  };

  return (
    <div style={containerStyle}>
      <div style={{
        width: "100%",
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        background: theme === "light" ? "#ffff" : "#333",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
        textAlign: "center",
        color: theme === "light" ? "#333" : "#fff",
        transition: "background 0.3s ease-in-out",
      }}>
        <h2>Todo List</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Add a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              background: theme === "light" ? "#f8f9fa" : "#444",
              color: theme === "light" ? "black" : "white",
              flex: 1,
              padding: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={addTask}
            style={{
              background: "rgb(100, 108, 255)",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((t, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: theme === "light" ? "#f8f9fa" : "#444",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "5px",
                color: theme === "light" ? "#333" : "#fff",
              }}
            >
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTask(index)}
              />
              <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>
                {t.task}
              </span>

              <button
                onClick={() => deleteTask(index)}
                style={{
                  background: "rgb(100, 108, 255)",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
