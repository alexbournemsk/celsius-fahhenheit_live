import React from 'react'

const scaleNames = {
    c: 'цельсия',
    f: 'фаренгейта'
}


function TemperatureInput(props) {
    const { temperature, scale } = props

    const handleChange = (evt) => {
        props.onTemperatureChange(evt.target.value);
    }

    
    return (
        <fieldset>
            <legend>Температура в градусах  {scaleNames[scale]}</legend>
            <input
                value={temperature}
                onChange={handleChange} />
        </fieldset>
    )
}

export default TemperatureInput