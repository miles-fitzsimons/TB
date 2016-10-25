import { connect } from 'react-redux';
import Submenu from '../components/Submenu';

var mapStateToProps = state => {
  console.log('state', state);
  return {
    showModal: state.showModal
  };
}

var mapDispatchToProps = dispatch => {
  return {
    updateModalData: (payload) => {
      dispatch({
        type: 'updateModalData',
        payload: payload
      });
    },
    toggleShowModal: () => {
      dispatch({
        type: 'toggleShowModal'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Submenu);