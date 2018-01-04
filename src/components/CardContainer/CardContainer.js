import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';
import './CardContainer.css'

const CardContainer = props => {
const mappedCards= props.houses.map((house)=> {
  return <Card
          name= {house.name}
          founded={house.founded}seats= {house.seats}
          titles= {house.titles}
          coatOfArms={house.coatOfArms}
          ancestralWeapons={house.ancestralWeapons}
          words={house.words}/>
})

if (props.houses[0]){
  return (
    <div>
      {mappedCards}
    </div>
  );
} else {
  return (
    <div className='loading'>
    </div>
  )
}
  
};

const mapStateToProps = state => ({
  houses: state.houses
})

export default connect (mapStateToProps, null)(CardContainer);