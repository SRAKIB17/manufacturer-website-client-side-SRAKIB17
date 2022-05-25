import React from 'react';
import vid4 from './404-2021.mp4'

const NoteFound = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <video src={vid4} autoPlay loop></video>
            </div>
        </div>
    );
};

export default NoteFound;