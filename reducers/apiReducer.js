const apiReducer = (state = {
  nid: 1,
  title: "Lorem ipsum"
}, action) => {
  switch (action.type) {
    case "GET_DATA":
        state = {
          ...state,
          title: action.payload
        }
        break;
    case "SAVE_DATA":
        state = {
          ...state,
          nid: action.payload          
        }
        break;
    default:
        break;
  }
  return state;
};
export default apiReducer;