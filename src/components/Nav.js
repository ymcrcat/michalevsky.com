import {Link} from 'react-router-dom';

function AddLink(props) {
    return (
        <li><Link to={props.to}>{props.text}</Link></li>
    )
}

function Nav() {
    return (
        <ul>
            <AddLink to='/' text='Publications' />
            <AddLink to='/talks' text='Talks' />
            <AddLink to='/music' text='Music' />
            <AddLink to='/software' text='Software' />
            <AddLink to='/contact' text='Contact' />
        </ul>
    )
}

export default Nav;