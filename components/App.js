import React, { Component } from 'react'
import Sidebar from './Sidebar'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div className="app">
        <Sidebar />
      </div>
    )
  }

}

export default App
