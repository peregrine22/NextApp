import React from "react";

import TaskDetail from "../../components/tasks/TaskDetail";
import { GetTasks } from "../../queries";
import { Task } from "../../graphql-types";

function TaskDetails(props) {
  console.log(props.task);

  return (
    <TaskDetail
      id={props.task.id}
      text={props.task.text}
      day={props.task.day}
      reminder={props.task.reminder}
    />
  );
}

export async function getStaticPaths() {
  //get all tasks
  //fill an array with task ids
  const data = await GetTasks();

  const taskIds: Array<String> = data.map((task: Task) => task.id);

  console.log("paths = " + taskIds);

  return {
    fallback: false,
    paths: taskIds.map((task) => ({
      params: {
        taskId: task,
      },
    })),
  };
}

export async function getStaticProps(context) {
  const taskId = context.params.taskId;
  console.log("current taskid/page = " + taskId);

  //get all tasks
  //find task with provided id
  //send that task as prop
  const data = await GetTasks();
  const task = data.find((i) => i.id === taskId);

  return {
    props: {
      task: task,
    },
  };
}

export default TaskDetails;
