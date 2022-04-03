import router from 'next/router';
import { FaTimes } from 'react-icons/fa';
import Header from '../components/layout/Header';
import NewTask from '../components/tasks/NewTask';

function NewTaskPage() {
    const closeFrom = () => {
        router.push('/');
    }
    return (
        <>
            <div>
                <Header text={'New Task'} />
                <FaTimes style={{ cursor: "pointer" }} onClick={closeFrom} />
            </div>
            <NewTask />
        </>
    );
}

export default NewTaskPage