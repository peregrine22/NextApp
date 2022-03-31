import {
    MutationCreateTaskArgs,
} from './graphql-types'

import todoList from './db.json';

export const resolvers = {
    Query: {
        list: () => todoList.tasks,
    },
    Mutation: {
        createTask(_: number, { text, day, reminder }: MutationCreateTaskArgs) {
            const task = { id: (Math.floor(Math.random() + 1)), text, day, reminder }
            todoList.tasks.push(task)
            return task
        },
    }
};