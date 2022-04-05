import { gql } from "@apollo/client";

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
export const DELETE_TASK = gql`
  mutation Mutation($deleteTaskId: String!) {
    deleteTask(id: $deleteTaskId)
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