const initState = {
  filter: {
    search: "",
    status: "",
    priority: [],
  },
  todoList: [
    { id: "1", name: "jet huan", completed: true, priority: "Medium" },
    { id: "1", name: "jet abuss", completed: true, priority: "Medium" },
    { id: "1", name: "jet boeing", completed: true, priority: "Medium" },
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
        todoList: [
          ...state.todoList,
          {
            id: "10",
            name: "jet hehehe",
            completed: false,
            priority: "Medium",
          },
        ],
      };
    default:
      return;
  }
};
export default rootReducer;
