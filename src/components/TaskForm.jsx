import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';
import AuthContext from '../auth/AuthContext';

function TaskForm(props) {
    const [formData, setFormData] = useState(null);
    const { saveTask, tmessage } = useContext(TaskContext);
    const { user } = useContext(AuthContext);

    const handleChange = (e) => {
        let { value, name } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            userid: user.id,
            modifiedon: Date()
        }))
    }

    // const addTask = () => {
    //     saveTask(formData);
    // }

    return (
        <div className='p-2'>
            <h3 className='text-white'>Create Task</h3>
            <div className='card'>
                <div className='card-body'>
                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                        <input type="text" name='title' className='form-control' onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Due Date</label>
                        <input type="datetime-local" name='duedate' className='form-control' onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <textarea name="description" className='form-control' rows="10" onChange={handleChange}></textarea>
                    </div>
                    <p>{tmessage}</p>
                    <div>
                        <button className='btn btn-primary' onClick={() => { saveTask(formData) }}>Create Task</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;