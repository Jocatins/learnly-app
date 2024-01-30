// redux/reducers.js
const initialState = {
	tasks: getTasksFromLocalStorage(),
};

function getTasksFromLocalStorage() {
	const storedTasks = localStorage.getItem("tasks");
	return storedTasks ? JSON.parse(storedTasks) : [];
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TASK":
			const newTasks = [
				...state.tasks,
				{ ...action.payload, id: state.tasks.length + 1 },
			];
			saveTasksToLocalStorage(newTasks);
			return {
				...state,
				tasks: newTasks,
			};
		case "EDIT_TASK":
			const updatedTasks = state.tasks.map((task) =>
				task.id === action.payload.id
					? { ...task, ...action.payload }
					: task
			);
			saveTasksToLocalStorage(updatedTasks);
			return {
				...state,
				tasks: updatedTasks,
			};
		case "DELETE_TASK":
			const filteredTasks = state.tasks.filter(
				(task) => task.id !== action.payload
			);
			saveTasksToLocalStorage(filteredTasks);
			return {
				...state,
				tasks: filteredTasks,
			};
		case "INITIALIZE_TASKS":
			return {
				...state,
				tasks: action.payload,
			};
		default:
			return state;
	}
};

function saveTasksToLocalStorage(tasks) {
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

export default rootReducer;
