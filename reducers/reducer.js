const INITIAL_STATE = {
  showVideoSubmenu: false,
  showStillSubmenu: false,
  showContactSubmenu: false
};

var cloneState = state => {
  return {
    showVideoSubmenu: state.showVideoSubmenu,
    showStillSubmenu: state.showStillSubmenu,
    showContactSubmenu: state.showContactSubmenu
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

  }

  return state;
}

export default reducer;