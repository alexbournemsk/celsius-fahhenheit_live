import React from "react";
import { useState } from 'react'

import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";



export default function Calculator() {

    const [temperature, setTemperature] = useState(0)
    const [scale, setScale] = useState('c')


    const handleCelsiusChange = (temperature) => {
        setScale('c')
        setTemperature(temperature)
    }

    const handleFahrenheitChange = (temperature) => {
        setScale('f')
        setTemperature(temperature)
    }

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <fieldset>
            <TemperatureInput
                temperature={celsius}
                scale={'c'}
                onTemperatureChange={handleCelsiusChange} />

            <TemperatureInput
                temperature={fahrenheit}
                scale={'f'}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={temperature} />
        </fieldset>

    );
}


