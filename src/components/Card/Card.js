import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      isActive: this.props.active
    }
    let swornMembers;

    if (this.state.isActive){
      swornMembers = this.props.swornMembers.map((member)=> {
        const key = Object.keys(member)
        return (
          <p>{key}: {member[key]}</p>
        
     )
    })
  }
  }

  

  handleClick = () => {
   if(this.state.isActive){
    this.setState({isActive: false})
   } else {
    this.setState({isActive: true})
    }
  }
  

render(){
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
      <div>
      </div>
    </div>
  );
}
  
};

export default Card;