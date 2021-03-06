import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.active
    };
  }

  handleClick = () => {
    if (this.state.isActive){
      this.setState({isActive: false});
    } else {
      this.setState({isActive: true});
    }
  }
  
  render(){

    if (!this.state.isActive){
      return (
        <div 
          className='card'
          onClick={this.handleClick}>
          <h2>
            {this.props.name}
          </h2>
          <p>Founded: {this.props.founded}</p>
          <p>Seats: {this.props.seats}</p>
          <p>Titles: {this.props.titles}</p>
          <p>Coat Of Arms: {this.props.coatOfArms}</p>
          <p>Weapons: {this.props.ancestralWeapons}</p>
          <p>Words: {this.props.words}</p> 
        </div>
      );
    } else {

      return (
        <div 
          className='card'
          onClick={this.handleClick}>
          <h2>
            {this.props.name}
          </h2>
          <p>Founded: {this.props.founded}</p>
          <p>Seats: {this.props.seats}</p>
          <p>Titles: {this.props.titles}</p>
          <p>Coat Of Arms: {this.props.coatOfArms}</p>
          <p>Weapons: {this.props.ancestralWeapons}</p>
          <p>Words: {this.props.words}</p> 
          <div> Sworn Members: 
            {this.props.swornMembers.map((member, index)=> {
              const keys= Object.keys(member);
              return (<p key={index}>{keys}: {member[keys]}</p>);
            }
            )}
          </div>
        </div>
      );
    }
    
  }
  
}

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  titles: PropTypes.string || PropTypes.array,
  coatOfArms: PropTypes.string,
  ancestralWeapons: PropTypes.string,
  active: PropTypes.bool,
  seats: PropTypes.string,
  words: PropTypes.string,
  swornMembers: PropTypes.array
};