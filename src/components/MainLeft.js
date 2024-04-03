import photo from '../assets/yan.png';

function MainLeft(props) {
    return ( 
        <section id='mainLeft'>
            <img src={photo} alt = {props.authorName} width='150' />
        </section> 
    );
}

export default MainLeft;