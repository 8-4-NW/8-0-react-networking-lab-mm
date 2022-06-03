import React, { Component } from "react";

export default class PetList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { petList } = this.props;
    return (
      <div>
     
        {petList.map((pets, index) => {
          return (
            <span key = {pets.name}>
              {(index ? ', ' : "") + pets.name }

            </span>)
        })}
        
      </div>
    );
  }
}
