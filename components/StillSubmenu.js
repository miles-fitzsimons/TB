import React, { Component } from 'react';

class StillSubmenu extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div style={this.props.showStillSubmenu ? {display: 'initial'} : {display: 'none'}}>
        <ul>
          <li className="submenuItem">Still Project 1</li>
          <li className="submenuItem">Still 2</li>
          <li className="submenuItem">Still Proooooject 3</li>
          <li className="submenuItem">Still 4</li>
        </ul>
      </div>
    )
  }

}

export default StillSubmenu
