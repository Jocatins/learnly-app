import React, { useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import { initializeTasks } from "./redux/action";

function App() {
	useEffect(() => {
		// Fetch tasks from local storage and initialize the Redux store
		const storedTasks = localStorage.getItem("tasks");
		if (storedTasks) {
			const parsedTasks = JSON.parse(storedTasks);
			store.dispatch(initializeTasks(parsedTasks));
		}
	}, []);

	return (
		<>
			<Provider store={store}>
				<div className="container">
					<h1>Task Manager</h1>
					<TaskForm />
					<TaskList />
				</div>
			</Provider>
		</>
	);
}

export default App;
