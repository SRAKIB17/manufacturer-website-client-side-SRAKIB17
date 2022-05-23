import React from 'react';

const Description = ({ register, errors }) => {
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
                {...register("short_description", {
                    required: {
                        value: true,
                        message: 'Description is required'
                    }
                })}
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

            />
            {errors.short_description?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.short_description.message}</span>}


        </div>
    );
};

export default Description;