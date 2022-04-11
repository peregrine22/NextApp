import React, { useState } from "react";
import Button from "../layout/Button";
import { FaBackspace } from "react-icons/fa";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { UpdateTask } from "../../queries";
import { Task } from "../../graphql-types";


function TaskDetail(props) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const [taskText, setTaskText] = useState(props.text);
    const [taskDay, setTaskDay] = useState(props.text);
    const [taskReminder, setTaskReminder] = useState(props.reminder);

    const updateTask = useMutation(({ id, text, day, reminder }: Task) => UpdateTask(id, text, day, reminder), {
        onSettled: () => {
            queryClient.invalidateQueries("get-tasks");
        }
    });

    function goBackHome() {
        router.push("/");
    }
    return (
        <div>
            <FaBackspace size={20} onClick={goBackHome} />
            <form className="add-form" onSubmit={event => {
                event.preventDefault();
                updateTask.mutate({
                    id: props.id,
                    text: taskText,
                    day: taskDay,
                    reminder: taskReminder
                });
            }}>
                <div className="form-control">
                    <input type='text' placeholder={props.text} defaultValue={props.text} onChange={e => { setTaskText(e.target.value) }} />
                </div>
                <div className="form-control">
                    <input type='text' placeholder={props.day} defaultValue={props.day} onChange={e => { setTaskDay(e.target.value) }} />
                </div>
                <div className="form-control">
                    <label>Reminder</label>
                    <input type='checkbox' checked={props.reminder} onChange={e => { setTaskReminder(e.target.checked) }} />
                </div>
                <input className="btn" type='submit' value='Submit Changes' />
            </form>
        </div>
    );
}

export default TaskDetail;
