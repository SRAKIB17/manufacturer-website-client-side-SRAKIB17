import React from 'react';
import EditForm from './Edit/EditForm';
const EditProductModal = ({setEdit:{setEdit, edit}}) => {


    return (
        <div>

            <input type="checkbox" id="editModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="editModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <EditForm setEdit={{setEdit, edit}}/>
                </div>
            </div>
        </div >
    );
};

export default EditProductModal;