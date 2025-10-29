import Nav from './Nav';
import linkedin from '../assets/linkedin.png';

function Footer() {
    return (
        <footer className="mt-7 pt-4 border-t border-gray-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
            <a href="https://www.linkedin.com/in/yanmichalevsky">
                <img 
                    src={linkedin}
                    alt='LinkedIn profile'
                    width='80'
                    height='15'
                    border='0'
                />
            </a>

            <Nav />
        </footer>
    )
}

export default Footer;