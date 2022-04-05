import { useMutation } from "@apollo/client";
import client from "../apollo-client";
import { GET_ALL_TASKS, DELETE_TASK } from '../queries'

import { useRouter } from "next/router";
import { useState } from "react";

import Button from "../components/layout/Button";
import Header from "../components/layout/Header";
import TaskList from "../components/tasks/TaskList";

function HomePage(props) {

  const [tasks, setTask] = useState(props.tasks);
  const [deleteTask] = useMutation(DELETE_TASK);
  console.log(tasks);

  const router = useRouter();
  const goToAddTaskPage = () => {
    console.log("Click");
    router.push("/new-task");
  };

  //make deleteTask query
  const DeleteTask = (taskId: number) => {
    deleteTask({
      variables: { deleteTaskId: taskId },
    });
    setTask(tasks.filter((task) => task.id !== taskId));
    console.log("deteled task with id " + taskId);
  };

  return (
    <>
      <Header />
      <Button text={"Add Task"} onClick={goToAddTaskPage} />
      <TaskList tasks={tasks} onDelete={DeleteTask} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_TASKS,
  });

  return {
    props: {
      tasks: data.tasks,
    },
    revalidate: 1
  };
}

export default HomePage;
