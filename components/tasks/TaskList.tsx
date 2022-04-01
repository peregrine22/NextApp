import TaskItem from "./TaskItem"

function TaskList(props) {
  return (
    <>
      {
        props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            text={task.text}
            day={task.day}
            reminder={task.reminder}
          />
        ))
      }
    </>
  )
}

export default TaskList