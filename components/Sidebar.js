import React, { Component } from 'react'

class Sidebar extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div className="sidebar">
        <h1>Tristan Brooks</h1>
        <h2>Videographer</h2>
        <h3>Video</h3>
        <h3>Still</h3>
        <h3>Contact</h3>
      </div>
    )
  }

}

export default Sidebar
