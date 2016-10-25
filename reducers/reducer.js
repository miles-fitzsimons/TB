const INITIAL_STATE = {
  showVideoSubmenu: false,
  showStillSubmenu: false,
  showContactSubmenu: false,
  showModal: false,
  modalData: {}
};

var cloneState = state => {
  return {
    showVideoSubmenu: state.showVideoSubmenu,
    showStillSubmenu: state.showStillSubmenu,
    showContactSubmenu: state.showContactSubmenu,
    showModal: state.showModal,
    modalData: Object.assign({}, state.modalData)
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = cloneState(state);

  switch(action.type) {
    case 'toggleVideoSubmenu':
      newState.showVideoSubmenu = !state.showVideoSubmenu;
      return newState;

    case 'toggleStillSubmenu':
      newState.showStillSubmenu = !state.showStillSubmenu;
      return newState;

    case 'toggleContactSubmenu':
      newState.showContactSubmenu = !state.showContactSubmenu;
      return newState;

    case 'toggleShowModal':
      newState.showModal = !state.showModal;
      return newState;

    case 'updateModalData':
      newState.modalData = action.payload;
      return newState;

  }

  return state;
}

export default reducer;