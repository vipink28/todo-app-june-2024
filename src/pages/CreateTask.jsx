import React from 'react';
import TaskForm from '../components/TaskForm';

function CreateTask(props) {
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='col-lg-6 justify-content-center align-items-center bg-primary h-100 d-flex flex-column'>
                    <div className='w-50'>
                        <TaskForm />
                    </div>
                </div>

                <div className='col-lg-6 justify-content-center align-items-center h-100 d-flex flex-column'>
                    <div className='card w-50'>
                        <div className='card-body'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;