import React from 'react';

const Card = props => {

  return (
    <div>
      <h2>
        {props.name}
      </h2>
      <p>Founded: {props.founded}</p>
      <p>Seats: {props.seats}</p>
      <p>Titles: {props.titles}</p>
      <p>Coat Of Arms: {props.coatOfArms}</p>
      <p>Weapons: {props.ancestralWeapons}</p>
      <p>Words: {props.words}</p>
    </div>
  )
}

export default Card;