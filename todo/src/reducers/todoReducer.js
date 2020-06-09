export const initialState = [
  {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589  
  }
]

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {  
        task: action.payload,
        completed: false,
        id: Date.now(),
        }
      ]
    case 'TOGGLE_COMPLETED':
      return state.map(task => {
        return action.payload === task.id ? {
          ...task, completed: !task.completed } : task;
      });
    case 'CLEAR_COMPLETED':
      return state.filter((task) => !task.completed)
    default:
      return state;
  }
}