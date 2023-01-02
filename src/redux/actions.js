// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: { id: "10", name: "jet abus", completed: true, priority: "Medium" },
// };

// thay cho đonạ trên : sử dụng action creators =< function

export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
