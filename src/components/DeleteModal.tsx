// import React from 'react'

const DeleteModal = () => {
  return (
    // <!-- Button trigger modal -->
    <div className=""> 
        <div className="ml-56 pt-20 pr-64">
        <button type="button" className="btn btn-primary  bg-red-500" data-toggle="modal" data-target="#exampleModalLong">
          Delete
        </button>
        </div>

        {/* // <!-- Modal --> */}
        <div className="modal fade" id="exampleModalLong" tab-index="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Delete Items</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete selected items?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger bg-red-500 mr-3 px-6" data-dismiss="modal">Yes</button>
                <button type="button" className="btn btn-secondary bg-gray-400">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default DeleteModal;