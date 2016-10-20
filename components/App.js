import React, { Component } from 'react';
import SidebarContainer from '../containers/SidebarContainer';

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div className="app">
        <SidebarContainer />
        <p className="builtByNobody">&copy; Built by <a className="nobody" href="mailto:miles.fitzsimons@gmail.com">Nobody</a></p>
      </div>
    )
  }

}

export default App;
