import React, { Component } from 'react';

class ContactSubmenu extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div>
        <ul>
          <li className="submenuItem">some.email@gmail.com</li>
          <li className="submenuItem">+64 22 123 4567</li>
          <li className="submenuItem" style={{paddingBottom: '1.5vw'}}>Anything else?</li>
        </ul>
      </div>
    )
  }

}

export default ContactSubmenu
