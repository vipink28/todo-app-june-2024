import React, { useContext, useRef } from 'react';
import { formatDate } from '../helper';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';

function Popup(props) {
    const { task } = props;
    const { type, data } = task;
    const closeBtn = useRef(null);
    const { deleteTask, tmessage } = useContext(TaskContext);
    return (
        <div className="modal" tabindex="-1" id='task-modal'>
            <div className="modal-dialog ">
                <div className="modal-content bg-primary text-white">
                    <div className="modal-header">
                        <button ref={closeBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            type === "view" ?
                                <div className='p-2'>
                                    <h3>{data?.title}</h3>
                                    <p>{data?.description}</p>
                                    <div className='d-flex justify-content-between'>
                                        <p className='mb-0'>Modified On: {formatDate(data?.modifiedon)}</p>
                                        <p className='mb-0'>Due Date: {formatDate(data?.duedate)}</p>
                                    </div>
                                </div> :
                                type === "edit" ?
                                    <div>
                                        <TaskForm isUpdate={true} data={data} closeBtn={closeBtn} isPopup={true} />
                                    </div> :
                                    <div className='p-2'>
                                        <p>Are you sure? you want to delete the task?</p>
                                        <p>{tmessage}</p>
                                        <div className='d-flex'>
                                            <button className='btn btn-danger ms-auto' onClick={() => { deleteTask(data) }}>Yes</button>
                                            <button className='btn btn-warning ms-2' data-bs-dismiss="modal">No</button>
                                        </div>
                                    </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;