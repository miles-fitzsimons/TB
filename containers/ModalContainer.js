import { connect } from 'react-redux';
import Modal from '../components/Modal';

const mapStateToProps = state => {
  console.log('modal container', state);
  return {
    modalData: state.modalData,
    showModal: state.showModal
  };
}

const mapDispatchToProps = dispatch => {
  return {
    toggleShowModal: () => {
      dispatch({
        type: 'toggleShowModal'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
