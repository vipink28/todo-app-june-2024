import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';
import AuthContext from '../auth/AuthContext';

function TaskForm(props) {
    const [formData, setFormData] = useState(null);
    const { saveTask, tmessage } = useContext(TaskContext);
    const { user } = useContext(AuthContext);
    const { isUpdate, setIsUpdate } = props;



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

    const onCancel = () => {
        setIsUpdate(false);
    }

    return (
        <div className='p-2'>
            <h3 className='text-white'>{isUpdate ? "Update Task" : "Create Task"}</h3>
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
                        {
                            isUpdate ?
                                <>
                                    <button className='btn btn-primary me-2'>Update Task</button>
                                    <button className='btn btn-warning' onClick={onCancel}>Cancel</button>
                                </> :
                                <button className='btn btn-primary' onClick={() => { saveTask(formData) }}>Create Task</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;