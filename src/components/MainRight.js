import {Route, Routes} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Talks from './Talks';
import Music from './Music';
import Sofrware from './Software';
import Contact from './Contact';
import Footer from './Footer';

function Header(props) {
    return (
        <header>
            <h1><span>{props.authorName}</span></h1><br/>
        </header>
    )
}

function MainRight(props) {
    return (
        <section id='mainRight' className="clear">
            <Header authorName={props.authorName}/>
            <nav>
               <Nav />
            </nav>

            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/talks' element={<Talks/>} />
                <Route path='/music' element={<Music/>} />
                <Route path='/software' element={<Sofrware/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>

            <Footer/>
        </section>
    )
}

export default MainRight;