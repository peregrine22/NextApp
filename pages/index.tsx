import { GetTasks, DeleteTask } from '../queries'
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';

import Button from "../components/layout/Button";
import Header from "../components/layout/Header";
import TaskList from "../components/tasks/TaskList";


function HomePage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  // const { data } = GetTasks();
  const tasks = useQuery('get-tasks', GetTasks);

  console.log('data :>> ', tasks.data);

  const goToAddTaskPage = () => {
    console.log("Click");
    router.push("/new-task");
  };

  //make deleteTask query
  const deleteTaskMutation = useMutation((taskId: number) => DeleteTask(taskId), {
    onSettled: () => {
      queryClient.invalidateQueries("get-tasks");
    }
  });

  return (
    <>
      <Header />
      <Button text={"Add Task"} onClick={goToAddTaskPage} />
      <TaskList tasks={tasks.data} onDelete={deleteTaskMutation.mutate} />
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
