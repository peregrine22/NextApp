import React from "react";
import Button from "../layout/Button";
import { FaBackspace } from "react-icons/fa";
import { useRouter } from "next/router";

function TaskDetail({ id, text, day, reminder }) {

    const router = useRouter();
    function goBackHome() {
        router.push("/");
    }
    return (
        <div>
            <FaBackspace size={20} onClick={goBackHome} />
            <h1>{text}</h1>
            <h2>{day}</h2>
            {reminder ? <h2>Remidner is set</h2> : ""}
            {/* <Button text={"Edit Task"} /> */}
        </div>
    );
}

export default TaskDetail;
