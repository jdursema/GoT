import React from 'react';

const Card = props => {

  const swornMembers = props.swornMembers.map((member)=> {
    const key = Object.keys(member)
    return (
      <p>{key}: {member[key]}</p>
      
    )
  })


  return (
    <div className= {props.class}>
      <h2>
        {props.name}
      </h2>
      <p>Founded: {props.founded}</p>
      <p>Seats: {props.seats}</p>
      <p>Titles: {props.titles}</p>
      <p>Coat Of Arms: {props.coatOfArms}</p>
      <p>Weapons: {props.ancestralWeapons}</p>
      <p>Words: {props.words}</p>
      <div>
        {swornMembers}
      </div>
    </div>
  );
};

export default Card;