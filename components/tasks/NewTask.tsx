import { gql, useMutation } from "@apollo/client";
import { useState } from 'react';

const ADD_TASK = gql`
  mutation Mutation($text: String, $day: String, $reminder: Boolean) {
    createTask(text: $text, day: $day, reminder: $reminder) {
      id
      text
    }
  }
`;

function NewTask() {
  const [taskText, setTaskText] = useState('');
  const [taskDay, setTaskDay] = useState('');
  const [taskReminder, setTaskReminder] = useState(false);
  const [addTask, { data, loading, error }] = useMutation(ADD_TASK);

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  return (
    <form className="add-form" onSubmit={e => {
      e.preventDefault();
      addTask({
        variables: {
          text: taskText,
          day: taskDay,
          reminder: taskReminder
        }
      })
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