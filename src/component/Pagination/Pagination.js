import React from 'react';

const Pagination = ({count, page, skipHandle, pageHandle }) => {
   
    
    return (
        <div className='p-4 flex justify-center items-center'>
            <div className="btn-group">

                {
                    Number.isFinite(count) && (
                        [...Array(count)?.keys()].map(currentPage =>
                            <button class={"btn btn-sm " + ((page === currentPage) ? 'btn-active text-white font-bold' : '')} onClick={() => pageHandle(currentPage)}>{currentPage + 1}</button>

                        ))
                }


                <select className='input input-bordered input-accent ml-1 btn-sm' onBlur={skipHandle} onChange={skipHandle} onClick={skipHandle}>
                    <optgroup label="Per page count">
                        <option value="5">5</option>
                        <option value="10" selected='true'>10</option>
                        <option value="15">10</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </optgroup>
                </select>

            </div>
        </div>
    );
};

export default Pagination;