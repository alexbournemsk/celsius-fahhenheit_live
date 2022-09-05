import React from "react";
import { useState } from 'react'

import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

export default function Calculator () {

    const [temperature, setTemperature] = useState(0)

    const handleChange = (evt) => {
        setTemperature(evt.target.value)
    }

    return (
        <fieldset>           
            <TemperatureInput handleChange = {handleChange}/>
            <BoilingVerdict celsius={temperature} />
        </fieldset>

    );
}


