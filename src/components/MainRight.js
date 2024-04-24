import {Route, Routes} from 'react-router-dom';
import { useAuthorContext } from '../Context'; // Adjust the path as necessary
import Nav from './Nav';
import Home from './Home';
import Talks from './Talks';
import Music from './Music';
import Software from './Software'; // Corrected typo in 'Software'
import Contact from './Contact';
import Footer from './Footer';

function Header(props) {
    return (
        <header>
            <h1><span>{props.authorName}</span></h1><br/>
        </header>
    )
}

function MainRight() {
    const { authorName } = useAuthorContext();

    return (
        <section id='mainRight' className="clear">
            <Header authorName={authorName}/>
            <nav>
               <Nav />
            </nav>

            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/talks' element={<Talks/>} />
                <Route path='/music' element={<Music/>} />
                <Route path='/software' element={<Software/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>

            <Footer/>
        </section>
    )
}

export default MainRight;