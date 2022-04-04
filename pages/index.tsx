import { gql, useMutation } from "@apollo/client";
import client from "../apollo-client";
import { useRouter } from "next/router";
import { useState } from "react";

import Button from "../components/layout/Button";
import Header from "../components/layout/Header";
import TaskList from "../components/tasks/TaskList";

function HomePage(props) {

  const [tasks, setTask] = useState(props.tasks);
  console.log(tasks);

  const router = useRouter();
  const goToAddTaskPage = () => {
    console.log("Click");
    router.push("/new-task");
  };

  //make deleteTask query
  const DeleteTask = (taskId: string) => {
    console.log("detele " + taskId);
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
    query: gql`
      query list {
        tasks {
          id
          text
          day
          reminder
        }
      }
    `,
  });

  return {
    props: {
      tasks: data.tasks,
    },
  };
}

export default HomePage;
