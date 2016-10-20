import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

var mapStateToProps = state => {
  return state;
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