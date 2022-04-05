import { useMutation } from "@apollo/client";
import { ADD_TASK } from '../../queries'

import { useRouter } from "next/router";
import { useState } from 'react';

function NewTask() {
  const [taskText, setTaskText] = useState('');
  const [taskDay, setTaskDay] = useState('');
  const [taskReminder, setTaskReminder] = useState(false);
  const [addTask, { data, loading, error }] = useMutation(ADD_TASK);

  const router = useRouter();

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  return (
    <form className="add-form" onSubmit={event => {
      event.preventDefault();
      addTask({
        variables: {
          text: taskText,
          day: taskDay,
          reminder: taskReminder
        }
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