import React from 'react';

const Card = props => {

  return (
    <div>
      <h2>
        {props.name}
      </h2>
      <p>{props.founded}</p>
      <p>{props.seats}</p>
      <p>{props.titles}</p>
      <p>{props.coatOfArms}</p>
      <p>{props.ancestralWeapons}</p>
      <p>{props.words}</p>
    </div>
  )
}

export default Card;