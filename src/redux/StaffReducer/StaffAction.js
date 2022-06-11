export const togglePopup = (message, status) => (dispatch) => {
  dispatch({
    type: "OPEN_TOGGLE",
    payload: {
      message,
      status,
    },
  });
  setTimeout(() => {
    dispatch({
      type: "CLOSE_TOGGLE",
    });
  }, 2000);
};
