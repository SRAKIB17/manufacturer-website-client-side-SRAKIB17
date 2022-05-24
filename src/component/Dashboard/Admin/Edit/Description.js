import React from 'react';

const Description = ({ getRef ,product}) => {
    
    const heightAutoHandle = (e) => {
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + 'px'
    }
    const onchangeInput = (e) => {
        heightAutoHandle(e)
    }


    return (
        <div className=' max-w-xs w-full'>
            <textarea
            value={product?.short_description}
                ref={getRef}
                placeholder="Description"
                className="input input-bordered input-accent mb-2 p-2 w-full textareaScroll"

                onChange={onchangeInput}
                onInput={onchangeInput}

                onCut={heightAutoHandle}
                onPaste={heightAutoHandle}
                onDrop={heightAutoHandle}
                onKeyDown={heightAutoHandle}
                onBlur={heightAutoHandle}
                onKeyUp={heightAutoHandle}
                required

            ></textarea>
            


        </div>
    );
};

export default Description;