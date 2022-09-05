import React from 'react'

export default function BoilingVerdict(props) {
    if (props.celsius >= 232.778) {
        return (
            <div style={{ color: 'red' }}>Горит бумага 🔥</div>
        )
    } else if (props.celsius >= 100) {
        return (
            <div style={{ color: 'red' }}>Кипит вода ☕</div>
        )
    } else 
    return (
        <div >Не кипит укроп</div>
    )
}
