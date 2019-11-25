import React from 'react';
import {Link} from 'react-router-dom';
import defaultImages from '../images/room-1.jpeg';
import PropType from 'prop-types';

function Room({dhomatmain}) {
    const { name, slug, images, price} = dhomatmain;
    
    return(
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImages} alt="single-room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to ={`/rooms/${slug}/`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}
export default Room

Room.protoTypes = {
    room:PropType.shape({
        name:PropType.string.isRequired,
        slug:PropType.string.isRequired,
        images:PropType.arrayOf(PropType.string).isRequired,
        price:PropType.number.isRequired,
    })
}