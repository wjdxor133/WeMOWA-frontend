import React from 'react'
import './CheckBox.scss';

export const CheckBox = props => {

    return (
        <label className="OnePrice">
            <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" 
            checked={props.isChecked} value={props.value} className="PointCheck"
            /> 
            <a href=" " className="PointPrice">
                {props.value}
            </a>
        </label>
    )
}

export default CheckBox;