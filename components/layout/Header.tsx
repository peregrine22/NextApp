import Button from './Button';

function Header() {
    const onClick = () => {
        console.log('Click');
    }
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button text={'Add Task'} onClick={onClick}/>
        </header>
    );
}

export default Header