import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link} from 'react-router-dom'
import Services from '../component/Services'
import FeaturedRoom from '../component/FeaturedRoom'

function Home() {
    return(
    <>
        <Hero>
            <Banner title = "Pata e Aniles" subtitle = "Pata e Vogel kushton 10$">
            <Link to="/rooms" className="btn-primary" >Our Rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />
    </>
    )
}

export default Home