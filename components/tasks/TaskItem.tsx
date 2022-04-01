import { FaTimes } from 'react-icons/fa';

function TaskItem(props) {
  return (
    <div className={`task ${props.reminder ? 'reminder' : ''}`}>
      <h3>
        {props.text}
        <FaTimes />
      </h3>
      <p>{props.day}</p>
    </div>
  );
}

export default TaskItem