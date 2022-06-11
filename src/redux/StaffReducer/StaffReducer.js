const initState = {
  isLoggedIn: false,
  user: {},
  teachers: [],
  popUpToggle: true,
  popUpMessage: "",
  popUpStatus: "",
};

const StaffReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        teachers: [],
      };

    case "POPULATE_TEACHERS":
      return {
        ...state,
        teachers: action.payload,
      };

    case "OPEN_TOGGLE":
      return {
        ...state,
        popUpToggle: true,
        popUpMessage: action.payload.message,
        popUpStatus: action.payload.status,
      };

    case "CLOSE_TOGGLE":
      return {
        ...state,
        popUpToggle: false,
        popUpMessage: "",
        popUpStatus: "",
      };

    default:
      return state;
  }
};

export default StaffReducer;
