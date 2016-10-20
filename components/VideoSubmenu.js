import React, { Component } from 'react';
import ProjectModal from './ProjectModal';
import Boron from 'boron';
const Modal = Boron['OutlineModal'];

class VideoSubmenu extends Component {

  constructor (props) {
    super(props)
    this.state = {showModal: false};
  }

  showModal() {
    this.refs.modal.show();
  }

  hideModal() {
    this.refs.modal.hide();
  }

  render () {
    return(
      <div style={this.props.showVideoSubmenu ? {display: 'initial'} : {display: 'none'}}>
        <ul>
          <li className="submenuItem" onClick={this.showModal.bind(this)}>Video Project 1</li>
          <li className="submenuItem">Video 2</li>
          <li className="submenuItem">Video Proooooject 3</li>
          <li className="submenuItem">Video 4</li>
        </ul>
        <Modal ref="modal" keyboard={true} backdropStyle={{backgroundColor: 'red'}}>
          <ProjectModal modalHeading="Video Project 1"/>
        </Modal>
      </div>
    )
  }
}

export default VideoSubmenu;
