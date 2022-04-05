import { Maybe } from "graphql/jsutils/Maybe";

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type List = {
    __typename?: 'List';
    id: Scalars['String'];
    title: Scalars['String'];
    tasks: Array<Task>;
};

export type ListTasksArgs = {
    title: Scalars['String'];
};

export type Task = {
    __typename?: 'Task';
    id: Scalars['Int'];
    text: Scalars['String'];
    day: Scalars['String'];
    reminder: Scalars['Boolean'];
};

export type AddTaskResult = {
    success: Scalars['Boolean'];
    task?: Maybe<Task>;
}

export type Query = {
    __typename?: 'Query';
    tasks: Array<Task>;
};

export type Mutation = {
    __typename?: 'Mutation';
    createTask: Task;
    updateTask: Task;
    deleteTask: Scalars['String'];
};

export type MutationCreateTaskArgs = {
    text: Scalars['String'];
    day: Scalars['String'];
    reminder: Scalars['Boolean'];
};

export type MutationUpdateTaskArgs = {
    id: Scalars['String'];
    text: Scalars['String'];
    day: Scalars['String'];
    reminder: Scalars['Boolean'];
};

export type MutationDeleteTaskArgs = {
    id: Scalars['String'];
};
