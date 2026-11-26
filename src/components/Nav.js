import {NavLink} from 'react-router-dom';

function AddLink(props) {
    return (
        <li>
            <NavLink 
                to={props.to}
                className={({ isActive }) =>
                    `inline-block py-1 border-b-2 ${isActive ? 'border-blue-600 text-blue-700 font-semibold' : 'border-gray-300 text-gray-900 hover:text-blue-700 hover:border-blue-600'}`
                }
                end={props.end}
            >
                {props.text}
            </NavLink>
        </li>
    )
}

function ExternalLink(props) {
    return (
        <li>
            <a
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 border-b-2 border-gray-300 text-gray-900 hover:text-blue-700 hover:border-blue-600"
            >
                {props.text}
            </a>
        </li>
    )
}

function Nav() {
    return (
        <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-5 p-0">
            <AddLink to='/' text='Publications' end />
            <ExternalLink href='https://scholar.google.com/citations?user=ysrdkvkAAAAJ&hl=en' text='Scholar' />
            <AddLink to='/talks' text='Talks' />
            <AddLink to='/music' text='Music' />
            <AddLink to='/software' text='Software' />
            <AddLink to='/contact' text='Contact' />
        </ul>
    )
}

export default Nav;