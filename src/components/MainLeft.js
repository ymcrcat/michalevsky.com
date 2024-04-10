import photo from '../assets/yan.png';

function MainLeft(props) {
    return ( 
        <section id='mainLeft'>
            <section className='columns'>
                <img src={photo} alt = {props.authorName} width='150' />
            </section>
        </section> 
    );
}

export default MainLeft;