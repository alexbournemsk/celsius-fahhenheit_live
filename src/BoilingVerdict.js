import React from 'react'

export default function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return (
        <div style = {{color:'red'}}>Кипит укроп</div>
    )
  }
    return (
        <div >Не кипит укроп</div>
  )
}
