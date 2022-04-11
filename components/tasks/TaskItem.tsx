import { FaArrowCircleRight, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';

function TaskItem(props) {
  const router = useRouter();

  function showDetails() {
    router.push("/" + props.id);
  }

  return (
    <div className={`task ${props.reminder ? 'reminder' : ''}`} onDoubleClick={props.onToggle}>
      <h3>
        {props.text}
        <FaTimes style={{ cursor: "pointer" }} onClick={props.onDelete} />
      </h3>
      <p>{props.day}</p>
      <FaArrowCircleRight onClick={showDetails}/>
    </div>
  );
}

export default TaskItem