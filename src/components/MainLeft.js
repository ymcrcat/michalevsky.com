import { useAuthorContext } from '../Context';
import photo from '../assets/yan_new.jpg';

function MainLeft() {
    const { authorName } = useAuthorContext();

    return ( 
        <section id='mainLeft' className="hidden md:block sticky top-6 self-start w-48">
            <section className='columns p-0 bg-transparent border-0 shadow-none m-0'>
                <img src={photo} alt={authorName} className="w-28 h-28 rounded-full object-cover border border-gray-200" />
            </section>
        </section>     
    );
}

export default MainLeft;