import React, { Component } from 'react';
import Boron from 'boron';

class ProjectModal extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div>
        <h1>{this.props.modalHeading}</h1>
        <p>The content will be here. Video, still shots etc etc etc</p>
        <img src="http://placehold.it/350x350" />
      </div>
    )
  }
}

export default ProjectModal;
