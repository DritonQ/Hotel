import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link} from "react-router-dom"
import RoomsContainer from '../component/RoomContainer'

const Rooms= () => {
    return(
    <>
        <Hero hero="roomsHero"> 
            <Banner title ="Our Room" >
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
        <RoomsContainer></RoomsContainer>
    </>
    )
}

export default Rooms