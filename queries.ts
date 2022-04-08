import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";

export const endpoint = "http://localhost:4000/graphql";
const graphQLClient = new GraphQLClient(endpoint);

export async function GetTasks() {
  const { tasks } = await graphQLClient.request(GET_ALL_TASKS);
  return tasks;
}

export async function DeleteTask(taskId: number) {
  const variables = { deleteTaskId: taskId };
  await graphQLClient.request(DELETE_TASK, variables);
}

export async function CreateTask(taskText: string, taskDay: string, taskReminder: boolean) {
  const variables = { text: taskText, day: taskDay, reminder: taskReminder };
  await graphQLClient.request(ADD_TASK, variables);
}

export async function UpdateReminderForTask(taskId:number) {
  const variables = { updateReminderForTaskId: taskId };
  await graphQLClient.request(UPDATE_REMINDER_FOR_TASK, variables);
}

const DELETE_TASK = gql`
  mutation Mutation($deleteTaskId: String!) {
    deleteTask(id: $deleteTaskId)
  }
`;

const UPDATE_REMINDER_FOR_TASK = gql`
  mutation Mutation($updateReminderForTaskId: String!) {
    updateReminderForTask(id: $updateReminderForTaskId) {
      id
      text
      day
      reminder
    }
  }
`;

const GET_ALL_TASKS = gql`
  query GetTasks {
    tasks {
      id
      text
      day
      reminder
    }
  }
`;

const GET_TASK_BY_ID = gql`
  query Tasks($taskByIdId: Int) {
    taskByID(id: $taskByIdId) {
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
