import Button from './Button';
import PropTypes from 'prop-types'

function Header({text}) {

    return (
        <header className='header'>
            <h1>{text}</h1>
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