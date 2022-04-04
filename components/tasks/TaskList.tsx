import TaskItem from "./TaskItem"

function TaskList({ tasks, onDelete }) {
  return (
    <>
      {
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            text={task.text}
            day={task.day}
            reminder={task.reminder}
            onDelete={() => onDelete(task.id)}
          />
        ))
      }
    </>
  )
}

export default TaskList