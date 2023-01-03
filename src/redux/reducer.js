const initState = {
  filter: {
    search: "",
    status: "",
    priority: [],
  },
  todoList: [
    // { id: "1", name: "jet huan", completed: true, priority: "Medium" },
    // { id: "2", name: "jet abuss", completed: true, priority: "Medium" },
    // { id: "3", name: "jet boeing", completed: true, priority: "Medium" },
  ],
};
const rootReducer = (state = initState, action) => {
  console.log(state, action);
  // ví dụ payload
  /*{
    type: "todoList/addTodo",
     payload: { id: "1", name: "jet huan", completed: true, priority: "Medium" }
    
     } */
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;
