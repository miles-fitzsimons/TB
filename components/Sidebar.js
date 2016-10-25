import React, { Component } from 'react';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';

import SubmenuContainer from '../containers/SubmenuContainer';
import Submenu from './Submenu';
import ContactSubmenu from './ContactSubmenu'
import content from '../public/content/content';

class Sidebar extends Component {

  render () {
    let duration = 150;
    return(
      <div className="sidebar">
        <h1 className="name">Tristan Brooks</h1>
        <h2 className="title">Image and Sound</h2>


        {/* Video Submenu */}
        <div className="submenuTitleContainer">
          <VelocityComponent animation={{rotateZ: !this.props.showVideoSubmenu ? 0 : 90}} duration={duration}>
            <img className="triangle" src='../public/img/triangle.png' />
          </VelocityComponent>
            <h3 className="submenuTitle" onClick={() => {this.props.toggleVideoSubmenu()}}>{content.video.title}</h3>
        </div>
        <VelocityTransitionGroup enter={{animation: "slideDown", duration}} leave={{animation: "slideUp", duration}}>
          {this.props.showVideoSubmenu ? <SubmenuContainer content={content.video} /> : null }
        </VelocityTransitionGroup>


        {/* Still Submenu */}
        <div className="submenuTitleContainer">
          <VelocityComponent animation={{rotateZ: !this.props.showStillSubmenu ? 0 : 90}} duration={duration}>
            <img className="triangle" src='../public/img/triangle.png' />
          </VelocityComponent>
            <h3 className="submenuTitle" onClick={() => {this.props.toggleStillSubmenu()}}>{content.still.title}</h3>
        </div>
        <VelocityTransitionGroup enter={{animation: "slideDown", duration}} leave={{animation: "slideUp", duration}}>
          {this.props.showStillSubmenu ? <SubmenuContainer content={content.still} /> : null }
        </VelocityTransitionGroup>


        {/* Contact Submenu */}
        <div className="submenuTitleContainer" >
          <VelocityComponent animation={{rotateZ: !this.props.showContactSubmenu ? 0 : 90}} duration={duration}>
            <img className="triangle" src='../public/img/triangle.png' />
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

export default Sidebar;
