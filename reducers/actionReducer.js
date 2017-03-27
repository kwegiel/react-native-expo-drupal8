const actionReducer = (state = {
  nid: 1,
  actionRun: false
}, action) => {
  switch (action.type) {
    case "ACTION":
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
export default actionReducer;