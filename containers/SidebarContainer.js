import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

var mapStateToProps = state => {
  return {
    showVideoSubmenu: state.showVideoSubmenu,
    showStillSubmenu: state.showStillSubmenu,
    showContactSubmenu: state.showContactSubmenu,
  };
}

var mapDispatchToProps = dispatch => {
  return {
    toggleVideoSubmenu: () => {
      dispatch({
        type: 'toggleVideoSubmenu'
      });
    },
    toggleStillSubmenu: () => {
      dispatch({
        type: 'toggleStillSubmenu'
      });
    },
    toggleContactSubmenu: () => {
      dispatch({
        type: 'toggleContactSubmenu'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);