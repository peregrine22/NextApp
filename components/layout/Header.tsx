import PropTypes from 'prop-types'
import { FaQuestionCircle } from 'react-icons/fa';

function popup() {
    alert("Red line indicates than remidner is set\nTo update reminder for a task - click twise on it");
}

function Header({ text }) {
    return (
        <header className='header'>
            <h1>{text}</h1>
            <FaQuestionCircle size={20} style={{ cursor: 'pointer' }} onClick={popup} />
        </header>
    );
}

Header.defaultProps = {
    text: "Task Tracker",
}
Header.propTypes = {
    text: PropTypes.string,
}


export default Header