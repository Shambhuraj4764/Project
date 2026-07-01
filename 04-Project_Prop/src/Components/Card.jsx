import React from 'react'

function Card(props) {
  return (
    <div >
        <div className="card">
            <img src={props.image} alt="Image is not Found" />
            <div className="Name">
                <h1>{props.model}</h1>
                <h3>{props.company}</h3>
            </div>    
            <p>{props.info}</p>
      </div>
    </div>
  )
}

export default Card