import { useMutation, useQueryClient } from 'react-query';
import { CreateTask, DeleteTask, endpoint, ADD_TASK } from '../../queries';

import { useRouter } from "next/router";
import { useState } from 'react';
import { Task } from '../../graphql-types';

function NewTask() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [taskText, setTaskText] = useState('');
  const [taskDay, setTaskDay] = useState('');
  const [taskReminder, setTaskReminder] = useState(false);

  // Mutation Hook
  const addTask = useMutation(({text, day, reminder}:Task) => CreateTask(text,day,reminder), { 
    onSettled: () => {
      queryClient.invalidateQueries("get-tasks");
    }
  });

  return (
    <form className="add-form" onSubmit={event => {
      event.preventDefault();
      addTask.mutate({
        text: taskText,
        day: taskDay,
        reminder: taskReminder
      });
      router.push("/");
    }}>
      <div className="form-control">
        <label>Task</label>
        <input type='text' placeholder='Add Task' onChange={e => { setTaskText(e.target.value) }} />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day and Time' onChange={e => { setTaskDay(e.target.value) }} />
      </div>
      <div className="form-control">
        <label>Set Reminder</label>
        <input type='checkbox' onChange={e => { setTaskReminder(e.target.checked) }} />
      </div>
      <input className="btn" type='submit' value='Save Task' />
    </form>
  );
}

export default NewTask