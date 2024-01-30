export const addTask = (task) => {
	return {
		type: "ADD_TASK",
		payload: task,
	};
};

export const editTask = (editedTask) => {
	return {
		type: "EDIT_TASK",
		payload: editedTask,
	};
};

export const deleteTask = (taskId) => {
	return {
		type: "DELETE_TASK",
		payload: taskId,
	};
};

// Saving items to the local storage

export const initializeTasks = (tasks) => {
	return {
		type: "INITIALIZE_TASKS",
		payload: tasks,
	};
};
