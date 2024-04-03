import Nav from './Nav';
import linkedin from '../assets/linkedin.png';

function Footer() {
    return (
        <footer>
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