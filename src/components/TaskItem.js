import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, deleteTask } from "../redux/action";

const TaskItem = ({ task }) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [editedTask, setEditedTask] = useState({ ...task });

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSaveEdit = () => {
		dispatch(editTask(editedTask));
		setIsEditing(false);
	};

	const handleDelete = () => {
		dispatch(deleteTask(task.id));
	};

	return (
		<>
			<li>
				{isEditing ? (
					<div>
						<label>Title:</label>
						<input
							type="text"
							value={editedTask.title}
							onChange={(e) =>
								setEditedTask({
									...editedTask,
									title: e.target.value,
								})
							}
						/>

						<label>Description:</label>
						<textarea
							value={editedTask.description}
							onChange={(e) =>
								setEditedTask({
									...editedTask,
									description: e.target.value,
								})
							}
						/>

						<label>Due Date:</label>
						<input
							type="date"
							value={editedTask.dueDate}
							onChange={(e) =>
								setEditedTask({
									...editedTask,
									dueDate: e.target.value,
								})
							}
						/>

						<button onClick={handleSaveEdit}>Save</button>
					</div>
				) : (
					<div>
						<h3>{task.title}</h3>
						<p>Description: {task.description}</p>
						<p>Due Date: {task.dueDate}</p>
						<p>Status: {task.status}</p>
						<button onClick={handleEdit}>Edit</button>
						<button onClick={handleDelete}>Delete</button>
					</div>
				)}
			</li>
		</>
	);
};

export default TaskItem;
