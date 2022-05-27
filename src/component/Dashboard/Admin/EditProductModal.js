import React from 'react';
import EditForm from './Edit/EditForm';
const EditProductModal = ({setEdit:{setEdit, edit, refetch}}) => {


    return (
        <div>

            <input type="checkbox" id="editModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="editModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <EditForm setEdit={{setEdit, edit, refetch}}/>
                </div>
            </div>
        </div >
    );
};

export default EditProductModal;