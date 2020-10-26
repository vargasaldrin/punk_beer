import React from 'react'

function Select(props) {


    return (
        <label htmlFor={props.id}>
            <input type="radio" name={props.classType} className={props.classType} id={props.id} onChange={props.onChange} defaultChecked={props.check}/>
            {props.children}
        </label>    
    )
}

export default Select