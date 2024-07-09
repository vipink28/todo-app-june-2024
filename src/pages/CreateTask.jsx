import React, { useContext, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';
import { formatDate } from '../helper';

function CreateTask(props) {
    const { recentTasks, latestTask } = useContext(TaskContext);
    const [isUpdate, setIsUpdate] = useState(false);
    const edit = () => {
        setIsUpdate(true);
    }
    return (

        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='col-lg-6 justify-content-center align-items-center bg-primary h-100 d-flex flex-column'>
                    <div className='w-50'>
                        <TaskForm isUpdate={isUpdate} setIsUpdate={setIsUpdate} data={latestTask} />
                    </div>
                </div>

                <div className='col-lg-6 justify-content-center align-items-center h-100 d-flex flex-column'>
                    <div className='card bg-primary text-white w-75'>
                        <div className='card-body'>
                            {

                                latestTask ?
                                    <>
                                        <div className='d-flex justify-content-between'>
                                            <h3>Latest Task</h3>
                                            <button className='btn btn-info' onClick={edit}>Edit Task</button>
                                        </div>

                                        <h4>{latestTask.title}</h4>
                                        <p>{latestTask.description}</p>

                                        <div className='d-flex justify-content-between'>
                                            <p className='mb-0 text-warning'>Modified On: {formatDate(latestTask.modifiedon)}</p>

                                            <p className='mb-0 text-warning'>Due Date: {formatDate(latestTask.duedate)}</p>
                                        </div>
                                    </>
                                    :
                                    <p>No tasks</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;