import {
  MutationCreateTaskArgs,
  MutationSingleTaskArgs,
  MutationUpdateTaskArgs,
  AddTaskResult,
  Task,
} from "./graphql-types";

import todoList from "./db.json";

export const resolvers = {
  Query: {
    tasks: () => todoList.tasks,
    taskByID: (_: any, { id }: Task) =>
      todoList.tasks.find((task) => task.id === id),
  },
  Mutation: {
    createTask(
      _: any,
      { text, day, reminder }: MutationCreateTaskArgs
    ): AddTaskResult {
      try {
        const task = {
          id: Math.floor(Math.random() * 10000 + 1).toString(),
          text,
          day,
          reminder,
        };
        todoList.tasks.push(task);
        return { success: true, task };
      } catch (error) {
        return { success: false };
      }
    },
    deleteTask(_: any, { id }: MutationSingleTaskArgs) {
      const idx = todoList.tasks.findIndex((i) => i.id === id);
      if (idx !== -1) {
        todoList.tasks.splice(idx, 1);
        return `Item ${id} deleted with success`;
      }
      throw new Error("Id not found");
    },
    updateTask(_: any, { id, text, day, reminder }: MutationUpdateTaskArgs) {
      const task = todoList.tasks.find((i) => i.id === id);
      if (task) {
        task.text = text;
        task.day = day;
        task.reminder = reminder;
        return task;
      }
      throw new Error("Id not found");
    },
    updateReminderForTask(_: any, { id }: MutationSingleTaskArgs) {
      const task = todoList.tasks.find((i) => i.id === id);
      if (task) {
        task.reminder = !task.reminder;
        return task;
      }
      throw new Error("Id not found");
    },
  },
};
