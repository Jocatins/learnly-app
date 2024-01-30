import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
	const tasks = useSelector((state) => state.tasks);
	const [filterStatus, setFilterStatus] = useState("all");

	const filteredTasks = tasks.filter((task) =>
		filterStatus === "all" ? true : task.status === filterStatus
	);

	return (
		<>
			<div>
				<h2>Task List</h2>
				<div className="filter-section">
					<label>Filter by Status:</label>
					<select
						value={filterStatus}
						onChange={(e) => setFilterStatus(e.target.value)}
					>
						<option value="all">All</option>
						<option value="pending">Pending</option>
						<option value="completed">Completed</option>
					</select>
				</div>
				<ul>
					{filteredTasks.map((task) => (
						<TaskItem key={task.id} task={task} />
					))}
				</ul>
			</div>
		</>
	);
};

export default TaskList;
