import React, {Component} from 'react';
import {createStore} from 'redux'
import SpaceComponent from './SpaceComponent';

export default class SpacesList extends Component {

  constructor(props) {
    super(props);
    // this.spaces = this.spaces.bind(this);
    // this.makeSpaceComponents = this.makeSpaceComponents.bind(this);
  }

  get spaces() {
    console.log("spaces");
    console.log(this.props.spaces);
    return (
      this.props.spaces.map((space, index) => {
        return (
          <SpaceComponent key={index} space={space} index={index}/>
        )
      })
    );
  }

  render() {
    return (
      <div>
      <ul id="spacesList">
        <div>
          <input readOnly={true} value="Name"/>
          <input readOnly={true} value="Memory"/>
          <input readOnly={true} value="Disk"/>
          <input type="button" value="Add Space" id="add"/>
        </div>
        {this.spaces}
      </ul>
      </div>
    );
  }
}