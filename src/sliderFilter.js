import React from "react";

const Slider = ({min, max, value, onChange}) => {
    return (
        <div>
            <input className='slider' type='range' min={min} max={max} value={value} onChange={onChange}>
            </input>
        </div>
    )

}

export default Slider;