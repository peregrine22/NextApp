import TaskItem from "./TaskItem"

function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <>
      {
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            day={task.day}
            reminder={task.reminder}
            onDelete={() => onDelete(task.id)}
            onToggle={() => onToggle(task.id)}
          />
        ))
      }
    </>
  )
}

export default TaskList