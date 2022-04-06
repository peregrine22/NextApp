import { DELETE_TASK, GetTasks, GET_ALL_TASKS } from '../queries'
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useMutation, useQuery } from 'react-query';

import Button from "../components/layout/Button";
import Header from "../components/layout/Header";
import TaskList from "../components/tasks/TaskList";


function HomePage() {
  const router = useRouter();

  // const { data } = GetTasks();
  const tasks = useQuery('get-tasks', GetTasks);

  console.log('data :>> ', tasks.data);

  const goToAddTaskPage = () => {
    console.log("Click");
    router.push("/new-task");
  };

  //make deleteTask query
  const deleteTask = useMutation(DELETE_TASK);

  return (
    <>
      <Header />
      <Button text={"Add Task"} onClick={goToAddTaskPage} />
      <TaskList tasks={tasks.data} onDelete={DeleteTask} />
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('get-tasks', GetTasks);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default HomePage;
