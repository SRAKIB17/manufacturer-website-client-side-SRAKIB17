import axios from 'axios';
import React from 'react';

<button>Delete</button>
const DeleteModal = ({ setDelete: { setDelete, deleteP, refetch } }) => {

    const deleteHandle = async () => {
        axios.delete(`http://localhost:5000/product/${deleteP}`)
        .then(date => console.log(date))
      
        // if (data.modifiedCount) {
        //     toast.success('successfully add item')
        // }
        // else {
        //     toast.error('Everything up-to-date')
        // }
        console.log(deleteP);
    }
    return (
        <div>



            <input type="checkbox" id="deleteModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-2xl">Are You sure delete this product</h3>

                    <div class="modal-action">
                        <button onClick={deleteHandle} className='btn btn-error text-white'>Delete</button>

                        <label for="deleteModal" class="btn">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;