import React from 'react';

function Popup(props) {
    const { task } = props;
    const { type, data } = task;
    return (
        <div className="modal" tabindex="-1" id='task-modal'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            type === "view" ?
                                <div>View</div> :
                                type === "edit" ?
                                    <div>Edit</div> :
                                    <div>Delete</div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Popup;