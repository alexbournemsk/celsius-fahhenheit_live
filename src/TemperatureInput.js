import React from 'react'

function TemperatureInput(props) {
    const {temperature, handleChange} = props
   
    return (
        <fieldset>
            <legend>Введите температуру в градусах Цельсия:</legend>
            <input
                value={temperature}
                onChange={handleChange} />
        </fieldset>
    )
}

export default TemperatureInput