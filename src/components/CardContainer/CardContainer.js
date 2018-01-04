import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';

const CardContainer = props => {
const mappedCards= props.Houses.map((house)=> {
  return <Card
          name= {house.name}
          founded={house.founded}seats= {house.seats}
          titles= {house.titles}
          coatOfArms={house.coatOfArms}
          ancestralWeapons={house.ancestralWeapons}
          words={house.words}/>
})
  return (
    <div>
      {mappedCards}
    </div>
  );
};

const mapStateToProps = state => ({
  Houses: state.houses
})

export default connect (mapStateToProps, null)(CardContainer);