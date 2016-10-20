import React, { Component } from 'react';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';
import VideoSubmenu from './VideoSubmenu';
import StillSubmenu from './StillSubmenu';
import ContactSubmenu from './ContactSubmenu';

class Sidebar extends Component {

  render () {
    let duration = 150;
    return(
      <div className="sidebar">
        <h1 className="name">Tristan Brooks</h1>
        <h2 className="title">Image and Sound</h2>

        <div className="submenuTitleContainer" >
          <VelocityComponent animation={{rotateZ: !this.props.showVideoSubmenu ? 0 : 90}} duration={duration}>
            <img className="triangle" src='../public/triangle.png' />
          </VelocityComponent>
          <h3
            className="submenuTitle"
            onClick={() => {this.props.toggleVideoSubmenu()}}
          >
            Video
          </h3>
        </div>
        <VelocityTransitionGroup enter={{animation: "slideDown", duration}} leave={{animation: "slideUp", duration}}>
          {this.props.showVideoSubmenu ? <VideoSubmenu /> : null}
        </VelocityTransitionGroup>

        <div className="submenuTitleContainer" >
          <VelocityComponent animation={{rotateZ: !this.props.showStillSubmenu ? 0 : 90}} duration={duration}>
            <img className="triangle" src='../public/triangle.png' />
          </VelocityComponent>
          <h3
            className="submenuTitle"
            onClick={() => {this.props.toggleStillSubmenu()}}
          >
            Still
          </h3>
        </div>
        <VelocityTransitionGroup enter={{animation: "slideDown", duration}} leave={{animation: "slideUp", duration}}>
          {this.props.showStillSubmenu ? <StillSubmenu /> : null}
        </VelocityTransitionGroup>

        <div className="submenuTitleContainer" >
          <VelocityComponent animation={{rotateZ: !this.props.showContactSubmenu ? 0 : 90}} duration={duration}>
            <img className="triangle" src='../public/triangle.png' />
          </VelocityComponent>
          <h3
            className="submenuTitle"
            onClick={() => {this.props.toggleContactSubmenu()}}
          >
            Contact
          </h3>
        </div>
        <VelocityTransitionGroup enter={{animation: "slideDown", duration}} leave={{animation: "slideUp", duration}}>
          {this.props.showContactSubmenu ? <ContactSubmenu /> : null}
        </VelocityTransitionGroup>

      </div>
    )
  }
}

export default Sidebar
