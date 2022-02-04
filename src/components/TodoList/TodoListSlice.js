const initState =
    [
        { id: 1, name: 'Learn Redux', completed: true, priority: 'Medium' },
        { id: 2, name: 'Learn React', completed: false, priority: 'Low' },
        { id: 3, name: 'Learn Java', completed: false, priority: 'High' },
    ]

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        case 'todoList/toggleToDoStatus':
            return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)

        default: return state
    }
}
export default todoListReducer;