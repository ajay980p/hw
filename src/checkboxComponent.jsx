import React from 'react'

const CheckBoxComponent = ({ setIsRequired, isRequired }) => {

    const handleChange = () => {
        setIsRequired(!isRequired)
    }

    return (
        <div>
            <input type='checkbox' id='value' onChange={() => handleChange()} />
            <label htmlFor="value">CheckBox</label>
        </div>
    )
}

export default CheckBoxComponent