import { GraphQLClient, gql } from "graphql-request";

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

export async function UpdateTask(taskId:number, taskText:string, taskDay:string, taskReminder:boolean) {
  const variables = { updateTaskId: taskId, text: taskText, day: taskDay, reminder:taskReminder};
  await graphQLClient.request(UPDATE_TASK,variables);
}

const DELETE_TASK = gql`
  mutation Mutation($deleteTaskId: String!) {
    deleteTask(id: $deleteTaskId)
  }
`;

const UPDATE_TASK = gql`
  mutation Mutation(
    $updateTaskId: Int!
    $reminder: Boolean
    $day: String
    $text: String) {
    updateTask(id: $updateTaskId, reminder: $reminder, day: $day, text: $text) {
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
