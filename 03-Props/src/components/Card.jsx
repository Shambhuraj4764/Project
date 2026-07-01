import React from 'react'

function Card(props) {

    console.log(props);
    

  return (
          <div className="card">
            <img src={props.img}/>
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, natus.</p>
            <button>View Profile</button>   
          </div>
  )
}

export default Card