import { gql } from "@apollo/client";
import client from "../apollo-client";
import { useRouter } from 'next/router';
import Button from "../components/layout/Button";
import Header from "../components/layout/Header";
import TaskList from "../components/tasks/TaskList";

function HomePage(props) {
  console.log(props.tasks);
  const router = useRouter(); 

  const onClick = () => {
    console.log('Click');
    router.push('/new-task');
  }
  return (
    <>
      <Header />
      <Button text={'Add Task'} onClick={onClick} />
      <TaskList tasks={props.tasks} />
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
    }
  };
}

export default HomePage
