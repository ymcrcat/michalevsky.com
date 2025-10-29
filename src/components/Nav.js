import {NavLink} from 'react-router-dom';

function AddLink(props) {
    return (
        <li>
            <NavLink 
                to={props.to}
                className={({ isActive }) =>
                    `inline-block py-1 border-b-2 ${isActive ? 'border-blue-600 text-blue-700 dark:text-blue-400 font-semibold' : 'border-transparent text-gray-800 dark:text-gray-200 hover:border-blue-600'}`
                }
                end={props.end}
            >
                {props.text}
            </NavLink>
        </li>
    )
}

function Nav() {
    return (
        <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-5 p-0">
            <AddLink to='/' text='Publications' end />
            <AddLink to='/talks' text='Talks' />
            <AddLink to='/music' text='Music' />
            <AddLink to='/software' text='Software' />
            <AddLink to='/contact' text='Contact' />
        </ul>
    )
}

export default Nav;