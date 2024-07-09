import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
    const [tmessage, setTmessage] = useState("");
    const { user } = useContext(AuthContext);

    const [allTasks, setAllTasks] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [latestTask, setLatestTask] = useState(null);

    // saveTask
    const saveTask = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        try {
            const response = await fetch(`http://localhost:5000/tasks`, config);
            if (!response.ok) {
                throw new Error(`!Http Error status: ${response.status}`);
            }
            setTmessage("Task created successfully");
            getAllTasks(user.id);

        } catch (error) {
            console.log(error.message);
        }
    }

    const getAllTasks = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/tasks?userid=${id}`, { method: "GET" });
            if (!response.ok) {
                throw new Error(`!HTTP error status: ${response.status}`);
            }
            const tasks = await response.json();
            setAllTasks(tasks);
            let recent = tasks.slice(-3);
            setRecentTasks(recent);
            let latest = tasks[tasks.length - 1];
            setLatestTask(latest);

        } catch (error) {
            console.log(error.message);
        }
    }


    const updateTask = async (formData) => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        try {
            const response = await fetch(`http://localhost:5000/tasks/${formData.id}`, config);
            if (!response.ok) {
                throw new Error(`!HTTP error status: ${response.status}`);
            }
            setTmessage("Task updated successfully");
            getAllTasks(user.id);

        } catch (error) {
            console.error(error);
        }
    }


    // useEffect only runs one time if no dependencies added.
    useEffect(() => {
        if (user) {
            getAllTasks(user.id);
        }
    }, [user]);

    return (
        <TaskContext.Provider value={{
            saveTask,
            tmessage,
            allTasks,
            recentTasks,
            latestTask,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskContext;









