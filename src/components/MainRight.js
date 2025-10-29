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
        <header className="pb-3 mb-4 border-b border-gray-200 dark:border-neutral-800">
            <h1 className="text-2xl font-bold">{props.authorName}</h1>
        </header>
    )
}

function MainRight() {
    const { authorName } = useAuthorContext();

    return (
        <section id='mainRight' className="flex-1 min-w-0">
            <Header authorName={authorName}/>
            <nav>
               <Nav />
            </nav>

            <div className="space-y-4">
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/talks' element={<Talks/>} />
                    <Route path='/music' element={<Music/>} />
                    <Route path='/software' element={<Software/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </div>

            <Footer/>
        </section>
    )
}

export default MainRight;