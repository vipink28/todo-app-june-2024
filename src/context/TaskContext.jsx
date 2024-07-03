import { createContext, useState } from "react";
const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
    const [tmessage, setTmessage] = useState("");

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

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <TaskContext.Provider value={{
            saveTask,
            tmessage
        }}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskContext;









