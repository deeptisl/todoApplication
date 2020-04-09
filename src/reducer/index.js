import * as actionTypes from "../actionType/index";

const initialState = {
  todos: [],
  currentId: null
};
const reducer = (state = initialState, action) => {
  let todoState = state.todos;
  switch (action.type) {
    case actionTypes.ADD_LIST_ITEM:
      console.log("Add list item")
      todoState.push(action.payload);
      return {
        ...state,
        todos: todoState
      };
    case actionTypes.ADD_CURRENT_ID:
      console.log("currentId");
      return {
        ...state,
        currentId: action.payload
      };
    case actionTypes.UPDATE_LIST_ITEM:
      console.log("updateListItem");

      todoState[action.payload.id] = {
        ...todoState[action.payload.id],
        ...action.payload
      };
      console.log("ITEM", action.payload);
      return {
        ...state,
        // currentId: action.payload
        todos: todoState
      };
    case actionTypes.DELETE_LIST_ITEM:
      // console.log("updateListItem");

      todoState[state.currentId].list.splice(action.payload, 1);
      console.log("ITEM", action.payload);
      return {
        ...state,
        // currentId: action.payload
        todos: todoState
      };
    case actionTypes.UPDATE_LIST_ITEM_STATUS:
      // console.log("updateListItem");

      todoState[state.currentId].list[action.payload.id] = {
        ...todoState[state.currentId].list[action.payload.id],
        status: action.payload.status
      };
      console.log("ITEM", action.payload);
      return {
        ...state,
        // currentId: action.payload
        todos: todoState
      };
    default:
      return state;
  }
};

export default reducer;
