import React, { Component } from 'react';
import ModalContainer from '../containers/ModalContainer';


import Rodal from 'rodal';

class Submenu extends Component {

  handleClick(key) {
    this.props.toggleShowModal();
    this.props.updateModalData(this.props.content.projects[key]);
  }

  render () {
    var content = this.props.content;
    return(
      <div>
        <ul>
          {
            Object.keys(content.projects).map((key, i) => {
              return <li
                className="submenuItem"
                key={i}
                onClick={() => {this.handleClick(key)}}
              >
                {content.projects[key].title}
              </li>
            })
          }
        </ul>
            {this.props.showModal ? <ModalContainer /> : null}
      </div>
    )
  }
}

export default Submenu;
