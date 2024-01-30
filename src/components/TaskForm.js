// components/TaskForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/action";

const TaskForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [dueDate, setDueDate] = useState("");

	const handleAddTask = () => {
		dispatch(addTask({ title, description, dueDate, status: "pending" }));
		// Reset form fields
		setTitle("");
		setDescription("");
		setDueDate("");
	};

	return (
		<div>
			<h2>Add Task</h2>
			<form>
				<label>Title:</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label>Description:</label>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<label>Due Date:</label>
				<input
					type="date"
					value={dueDate}
					onChange={(e) => setDueDate(e.target.value)}
				/>

				<button type="button" onClick={handleAddTask}>
					Add Task
				</button>
			</form>
		</div>
	);
};

export default TaskForm;
