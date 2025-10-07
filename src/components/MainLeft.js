import { useAuthorContext } from '../Context';
import photo from '../assets/yan_new.jpg';

function MainLeft() {
    const authorName = useAuthorContext();

    return ( 
        <section id='mainLeft'>
            <section className='columns'>
                <img src={photo} alt={authorName} width='150' />
            </section>
        </section>     
    );
}

export default MainLeft;