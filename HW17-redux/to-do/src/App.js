const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

const TodoContext = React.createContext();

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ todos: state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
