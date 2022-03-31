import { gql } from "@apollo/client";
import client from "../apollo-client";

function HomePage(props) {
  console.log(props.tasks);
  return (
    <></>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query list {
        list {
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
      tasks: data.list,
    }
  };
}



export default HomePage
