import { MutationCreateTaskArgs, MutationDeleteTaskArgs } from "./graphql-types";

import todoList from "./db.json";

export const resolvers = {
    Query: {
        tasks: () => todoList.tasks,
    },
    Mutation: {
        createTask(_: any, { text, day, reminder }: MutationCreateTaskArgs) {
            const task = {
                id: Math.floor(Math.random() * 10000 + 1),
                text,
                day,
                reminder,
            };
            todoList.tasks.push(task);
            return task;
        },
        deleteTask(_: any, { id }: MutationDeleteTaskArgs) {
            const idx = todoList.tasks.findIndex(i => i.id.toString() === id)
            if (idx !== -1) {
                todoList.tasks.splice(idx, 1)
                return `Item ${id} deleted with success`
            }
            throw new Error('Id not found');
        }
    },
};
