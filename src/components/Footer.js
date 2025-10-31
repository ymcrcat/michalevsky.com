import {NavLink} from 'react-router-dom';

function Footer() {
    return (
        <footer className="mt-7 pt-4 border-t border-gray-200 dark:border-neutral-800">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-0 p-0 items-center">
                <li>
                    <a href="https://www.linkedin.com/in/yanmichalevsky" target="_blank" rel="noopener noreferrer" className="inline-block py-1 border-b-2 border-transparent">
                        <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="opacity-90"
                            aria-label="LinkedIn profile"
                            style={{verticalAlign: 'middle'}}
                        >
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/beyond_yan" target="_blank" rel="noopener noreferrer" className="inline-block py-1 border-b-2 border-transparent">
                        <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="opacity-90"
                            aria-label="Instagram profile"
                            style={{verticalAlign: 'middle'}}
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({ isActive }) =>
                            `inline-block py-1 border-b-2 ${isActive ? 'border-blue-600 text-blue-700 font-semibold' : 'border-gray-300 text-gray-900 hover:text-blue-700 hover:border-blue-600'}`
                        }
                        end
                    >
                        Publications
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/talks'
                        className={({ isActive }) =>
                            `inline-block py-1 border-b-2 ${isActive ? 'border-blue-600 text-blue-700 font-semibold' : 'border-gray-300 text-gray-900 hover:text-blue-700 hover:border-blue-600'}`
                        }
                    >
                        Talks
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/music'
                        className={({ isActive }) =>
                            `inline-block py-1 border-b-2 ${isActive ? 'border-blue-600 text-blue-700 font-semibold' : 'border-gray-300 text-gray-900 hover:text-blue-700 hover:border-blue-600'}`
                        }
                    >
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/software'
                        className={({ isActive }) =>
                            `inline-block py-1 border-b-2 ${isActive ? 'border-blue-600 text-blue-700 font-semibold' : 'border-gray-300 text-gray-900 hover:text-blue-700 hover:border-blue-600'}`
                        }
                    >
                        Software
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/contact'
                        className={({ isActive }) =>
                            `inline-block py-1 border-b-2 ${isActive ? 'border-blue-600 text-blue-700 font-semibold' : 'border-gray-300 text-gray-900 hover:text-blue-700 hover:border-blue-600'}`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;