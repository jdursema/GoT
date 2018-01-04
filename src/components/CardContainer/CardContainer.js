import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';
import './CardContainer.css'; 
import PropTypes from 'prop-types';

export const CardContainer = props => {
  const mappedCards= props.houses.map((house, index)=> {
    return <Card
      key={index}
      name= {house.name}
      founded={house.founded}seats= {house.seats}
      titles= {house.titles}
      coatOfArms={house.coatOfArms}
      ancestralWeapons={house.ancestralWeapons}
      words={house.words}
      active= {false}
      swornMembers={house.swornMembers}/>;
  });

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
    );
  }
  
};

const mapStateToProps = state => ({
  houses: state.houses
});

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  houses: PropTypes.array
};