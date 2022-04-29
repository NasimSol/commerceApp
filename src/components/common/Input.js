import React from 'react'

const Input = ({name, text,value, onChange , placeholder}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{text}</label>
            <input value={value} onChange={onChange} name={name} placeholder={placeholder} className="form-control" id={name} />
            <div id={id} className="form-text">We'll never share your email with anyone else.</div>
        </div>
    );
}

export default Input