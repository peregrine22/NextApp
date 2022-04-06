import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

import { Task } from "./graphql-types";

const endpoint = "http://localhost:4000/graphql";
const graphQLClient = new GraphQLClient(endpoint);

export const ALL_TASKS_QUERY = gql`
  query GetTasks {
    tasks {
      id
      text
      day
      reminder
    }
  }
`;

export async function GetTasks() {
  const { tasks } = await graphQLClient.request(ALL_TASKS_QUERY);
  return tasks;
}

export async function DeleteTask(taskId: number) {
  const variables = { deleteTaskId: taskId };
  await graphQLClient.request(DELETE_TASK, variables);
}
export const DELETE_TASK = gql`
  mutation Mutation($deleteTaskId: String!) {
    deleteTask(id: $deleteTaskId)
  }
`;

export const GET_ALL_TASKS = gql`
  query GetTasks {
    tasks {
      id
      text
      day
      reminder
    }
  }
`;

export const ADD_TASK = gql`
  mutation Mutation($text: String, $day: String, $reminder: Boolean) {
    createTask(text: $text, day: $day, reminder: $reminder) {
      task {
        id
        text
        day
        reminder
      }
    }
  }
`;
